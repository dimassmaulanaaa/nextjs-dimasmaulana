export type Color = {
  none: string;
  low: string;
  medium: string;
  high: string;
  veryHigh: string;
};

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
