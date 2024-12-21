import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
  host:"https://lab.impulsumgpt.com",
  projects: [
    {
      id: "nXve4wYifXcofuHGMpuNw8",  // ID of a project you are using
      token: "0EyReaw1KZR2TvcajfY7xdzB6SH4obdch2xPABVY66dXmE1UqawfbmeiFCCe3T8T139XjSNSwFKJ1yGS4dA"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})
