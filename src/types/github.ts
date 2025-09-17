export type ContributionDay = {
  contributionCount: number;
  date: string;
};

export type Week = {
  contributionDays: ContributionDay[];
};

export type ContributionCalendar = {
  totalContributions: number;
  weeks: Week[];
};
