export async function getGitHubContributionCalendar() {
  const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;
  const GITHUB_USERNAME = process.env.GITHUB_USERNAME;

  if (!GITHUB_ACCESS_TOKEN || !GITHUB_USERNAME) {
    throw new Error("Missing GitHub environment variables");
  }

  const headers = {
    Authorization: `bearer ${GITHUB_ACCESS_TOKEN}`,
  };

  const body = {
    variables: {
      username: GITHUB_USERNAME,
    },
    query: `
      query GetUserContributions($username: String!) {
        user(login: $username) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }
    `,
  };

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
    next: {
      revalidate: 86400,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();

    console.error("GitHub API Error:", errorText);
    throw new Error(
      `Failed to fetch GitHub contributions: ${response.statusText}`
    );
  }

  const data = await response.json();

  if (data.errors) {
    console.error("GitHub GraphQL Errors:", data.errors);
    throw new Error("Error in GitHub GraphQL query");
  }

  return data.data.user.contributionsCollection.contributionCalendar;
}
