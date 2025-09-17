import { type Color, Week, ContributionCalendar } from "@/types/github";
import { getGitHubContributionCalendar } from "@/lib/github";

const color: Color = {
  none: "#2A2E2E",
  low: "#0e4429",
  medium: "#006d32",
  high: "#26a641",
  veryHigh: "#39d353",
};

function getColor(count: number): string {
  if (count === 0) return color.none;
  if (count <= 1) return color.low;
  if (count <= 3) return color.medium;
  if (count <= 7) return color.high;

  return color.veryHigh;
}

function getMonthLabel(monthIndex: number): string {
  const date = new Date(new Date().getFullYear(), monthIndex, 1);

  return new Intl.DateTimeFormat("en", { month: "short" }).format(date);
}

function getMonthLabelsWithPosition(weeks: Week[]) {
  const labels: { month: string; x: number }[] = [];
  let currentMonth = -1;

  weeks.forEach((week, weekIndex) => {
    const firstDay = week.contributionDays[0];
    if (!firstDay) return;

    const date = new Date(firstDay.date);
    const month = date.getMonth();

    if (month !== currentMonth && weekIndex > 0) {
      const dayOfMonth = date.getDate();
      if (dayOfMonth <= 7) {
        labels.push({
          month: getMonthLabel(month),
          x: weekIndex * 13,
        });
      }
    }
    currentMonth = month;
  });

  return labels;
}

export async function DevActivity() {
  try {
    const { totalContributions, weeks }: ContributionCalendar =
      await getGitHubContributionCalendar();
    const monthLabelPositions = getMonthLabelsWithPosition(weeks);

    return (
      <section
        className="min-w-0 space-y-3.5 lg:mr-[300px] lg:pr-5"
        aria-labelledby="dev-activity-section-title"
      >
        <h2
          id="dev-activity-section-title"
          className="font-medium text-3xl md:text-4xl"
        >
          Dev Activity
        </h2>

        <div className="max-w-4xl p-3 rounded-r-2xl rounded-b-2xl bg-foreground/25">
          {/* CONTENT */}
          <div className="overflow-x-auto">
            <svg
              width={weeks.length * 16.46}
              height="133"
              viewBox={`0 0 ${weeks.length * 13} 101`}
              className="react-activity-calendar__calendar"
            >
              {/* MONTH LABELS */}
              <g className="react-activity-calendar__legend-month">
                {monthLabelPositions.map((label, index) => (
                  <text
                    key={index}
                    x={label.x}
                    dominantBaseline="hanging"
                    className="fill-primary"
                    fontSize="0.61em"
                  >
                    {label.month}
                  </text>
                ))}
              </g>

              {/* CONTRIBUTION SQUARES */}
              {weeks.map((week, weekIndex) => (
                <g
                  key={weekIndex}
                  transform={`translate(${weekIndex * 13}, 0)`}
                >
                  {week.contributionDays.map((day, dayIndex) => {
                    const color = getColor(day.contributionCount);
                    const yPosition = 11 + dayIndex * 13;

                    return (
                      <rect
                        key={`${weekIndex}-${dayIndex}`}
                        x="0"
                        y={yPosition}
                        width="11"
                        height="11"
                        rx="3"
                        ry="3"
                        fill={color}
                        data-date={day.date}
                        data-level={day.contributionCount}
                        role="gridcell"
                        aria-label={`${
                          day.contributionCount
                        } contributions on ${new Date(day.date)}`}
                        tabIndex={-1}
                      />
                    );
                  })}
                </g>
              ))}
            </svg>
          </div>

          {/* FOOTER */}
          <div className="flex items-center justify-between">
            {/* TOTAL CONTRIBUTIONS */}
            <p>
              <small>{totalContributions} contributions in the last year</small>
            </p>

            {/* CONTRIBUTION SCALE */}
            <div className="flex items-center gap-3">
              <p>
                <small>Less</small>
              </p>

              <div className="flex items-center gap-1">
                {[0, 1, 3, 7, 12].map((level) => (
                  <div
                    key={level}
                    className="size-3 rounded-[3px]"
                    style={{
                      backgroundColor: getColor(level),
                    }}
                  ></div>
                ))}
              </div>

              <p>
                <small>More</small>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error(error);

    return (
      <section
        className="min-w-0 space-y-3.5 lg:mr-[300px] lg:pr-5"
        aria-labelledby="dev-activity-section-title"
      >
        <h1
          id="dev-activity-section-title"
          className="font-medium text-3xl md:text-4xl"
        >
          Dev Activity
        </h1>

        <div className="h-[179px] max-w-4xl p-3 rounded-r-2xl rounded-b-2xl bg-foreground/25">
          {/* CONTENT */}
          <div className="h-[133px] flex flex-col items-center justify-center rounded-tr-[10px] bg-accent">
            <p className="md:text-lg">
              There was an issue fetching data from GitHub
            </p>

            <p className="text-sm md:text-base">Please try again later</p>
          </div>

          {/* FOOTER */}
          <div className="flex items-center justify-between">
            {/* TOTAL CONTRIBUTIONS */}
            <p>
              <small>Could not load total contributions in the last year</small>
            </p>

            {/* CONTRIBUTION SCALE */}
            <div className="flex items-center gap-3">
              <p>
                <small>Less</small>
              </p>

              <div className="flex items-center gap-1">
                {[0, 1, 3, 7, 12].map((level) => (
                  <div
                    key={level}
                    className="size-3 rounded-[3px]"
                    style={{
                      backgroundColor: getColor(level),
                    }}
                  ></div>
                ))}
              </div>

              <p>
                <small>More</small>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
