// Shared by the homepage grid (Projects.jsx) and the per-project page
// (ProjectPage.jsx). Add a project here and it shows up in both places —
// no other wiring needed.
export const projects = [
  {
    id: 1,
    title: 'JOB MOB',
    description:
      'A gamified social job tracker that turns applications into competition.',
    story: `
      I built Job Mob because I was getting frustrated with how
      meaningless the job application process could feel. You can spend
      hours applying to jobs and still have nothing to show for it if
      none of those applications work out. I wanted to make the process
      itself feel a little more rewarding.

      Job Mob gives you points for the work you put into each application.
      The more effort you put into a job, the more points you earn, and
      everything gets saved to your history. You can also create or join
      groups with friends and see how many points everyone has earned.
      Eventually, I want to add a weekly winner to make it a little more
      competitive.

      The app is built with React, Vite, and Firebase. I use Firebase for
      authentication and storing jobs, groups, and activity. I also use
      the app myself with friends while we're applying to jobs, which has
      been a good way to see whether the idea actually makes the process
      more motivating.

      I built this very recently, so I'm still figuring out what features
      actually make the process more fun without turning it into a game
      for the sake of having a game.
    `,
    tags: ['Web Development', 'Claude', 'Python', 'Product Design'],
    demoLink: 'https://jobmob27.web.app',
  },

  {
    id: 2,
    title: 'Spotify Interface with DJing',
    description:
      'A utility that acts on your existing Spotify playlists, splitting them out by key and BPM and downloading them to your computer',
    story: `
      I started this because I wanted to get better at DJing. I would hear
      transitions I liked in Spotify playlists and wanted an easier way to
      find songs that would work together. The DJ software I use also
      doesn't let me filter by key on the free version, so I decided to
      build my own solution around my existing Spotify playlists.

      The program takes a Spotify playlist and gets the track IDs through
      the Spotify API. I then use those IDs to find the BPM and key for
      each song. I first check Tunebat, and if the song isn't there, I run
      local analysis using Essentia through WSL.

      Once the information is collected, the program creates new Spotify
      playlists organized by key and organizes the downloaded tracks on
      my computer in the same way. That lets me take the tracks into
      Rekordbox without having to manually sort everything.

      The hardest part was getting consistent key and BPM analysis. I
      needed something that could handle a large number of songs while
      being reasonably consistent in how it analyzed them. The project
      currently runs entirely through the command line, but I'd like to
      build an actual interface for it eventually.

      The next thing I'd add is danceability analysis. BPM and key are
      useful, but they don't necessarily tell you whether two songs will
      actually sound good together.
    `,
    tags: ['API Integration', 'Python', 'Linux'],
    demoLink: '#',
  },

  {
    id: 3,
    title: 'Productivity Aid',
    description:
      'Your own personal project manager, built to spoon-feed you tasks and make productivity as friction-less as possible.',
    story: `
      I built this because I kept running into decision paralysis. I'd
      have a bunch of things I needed to work on, sit down at my computer,
      and spend too much time figuring out which one I should actually
      start.

      The idea is pretty simple: I tell the system what I'm working
      toward, where I am with it, and what I've been struggling with.
      When I want something to work on, I give it a timeframe and it
      generates a task that I can realistically finish in that amount of
      time.

      For bigger goals, it asks me questions until it understands enough
      to break the goal down into something smaller. It then tries to
      find tasks that don't have blockers and can actually move the larger
      goal forward.

      ChatGPT is used to understand my current situation and generate
      tasks based on that context. Right now I use it through the
      terminal, although I want to build an actual application for it.

      I've been using it throughout my job search. The project is still
      being fine-tuned, but one thing I've learned from building it is
      that it's easy to design something around your own perspective and
      assume it will work for everyone else. Getting other perspectives
      into the iteration process is something I want to do more of.
    `,
    tags: ['Python', 'ChatGPT Prompt Engineering', 'Product Design'],
    demoLink: '#',
  },

  {
    id: 4,
    title: 'Job Crawler',
    description:
      'A Tinder-style job board; swipe left or right on jobs and teach your preferences to the search engine.',
    story: `
      I started building Job Crawler because I was getting overwhelmed
      looking through LinkedIn and Indeed. I would see plenty of jobs
      that I didn't like, but I often couldn't explain exactly why. The
      existing filters could tell me things like location, salary, or
      experience level, but they couldn't really learn my softer
      preferences.

      I wanted to make that process more interactive. Jobs are presented
      one at a time and I can swipe left or right, similar to Tinder. When
      I don't like a job, the system asks me why. It uses those
      explanations to increase or decrease the importance of different
      words and characteristics when evaluating future jobs.

      The crawler pulls jobs from job-hosting platforms that I can legally
      scrape, including Ashby and Greenhouse. It extracts things like the
      description, location, experience level, compensation, and other
      criteria that might affect whether I'd actually want the job.

      Most of the current matching is based on computerized analysis of
      the job language and the preferences I've given it. Eventually,
      I'd like to train an LLM around that data so it can understand the
      difference between individual words and the broader context of a
      job.

      I've been using it for my own job search, which also makes testing
      it a little difficult. The thing I'm trying to measure is ultimately
      subjective: whether I actually want a job. The goal is to eventually
      have a job search engine that understands those softer preferences
      well enough that I spend less time looking through jobs I don't want.
    `,
    tags: ['Python', 'ChatGPT Prompt Engineering', 'Product Design'],
    demoLink: '#',
  },
]