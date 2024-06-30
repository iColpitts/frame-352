// An asynchronous function to call
// the Netlify build hook to rebuild your site
const rebuildSite = async triggerTitle => {
    // Construct the URL for the Netlify rebuild hook
    const url = new URL(process.env.BUILD_HOOK)
  
    // Add the title to the query string
    url.searchParams.append("trigger_title", triggerTitle)
  
    // Make a POST request to the Netlify webhook
    return await fetch(url.toString(), {
      method: "POST"
    })
  }
  
  // Always update your footer every year! :)
  export default async request => {
    await rebuildSite("daily rebuild to capture form submissions")
  }
  
  // Netlify scheduled function cron syntax
  // Run every day
  export const config = {
    schedule: "@daily"
  }