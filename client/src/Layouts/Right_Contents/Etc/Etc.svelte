<script>
  const educData = [
    {
      school: "UP Diliman",
      course: "MA Urban and Regional Planning",
      years: "2018 - present",
    },
    { school: "UP Diliman", course: "BA Film", years: "2011 - 2015" },
    {
      school: "UP Baguio",
      course: "BA Communication Arts",
      years: "2010 - 2011",
    },
  ];

  const coursesData = [
    {
      title: "Node.js, Express, MongoDB & More: The Complete Bootcamp 2020",
      provider: "Udemy",
      hours: "42",
    },
    {
      title: "The Complete Javascript Course 2020",
      provider: "Udemy",
      hours: "68.5",
    },
    {
      title: "AWS Certified Developer Associate 2021",
      provider: "Udemy",
      hours: "32.5",
    },
    {
      title: "MERN Stack Front TO Back: Full Stack React, Redux & Node.js",
      provider: "Udemy",
      hours: "12",
    },
    {
      title: "Introduction to Computer Networks for Non-Techies",
      provider: "Udemy",
      hours: "18",
    },
    {
      title: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
      provider: "Udemy",
      hours: "28",
    },
  ];
</script>

<div class="etc">
  <div class="education">
    <p class="etclabel">EDUCATION</p>
    {#each educData as data}
      <div class="educ">
        <p class="degree">{data.course}</p>
        <p class="school">{data.school}</p>
        <p class="years">{data.years}</p>
      </div>
    {/each}
  </div>
  <div class="courses">
    <p class="etclabel">COURSES TAKEN (online)</p>
    {#each coursesData as course}
      <div class="course">
        <p class="courseTitle">{course.title}</p>
        <p class="provider">{course.provider}</p>
        <p class="hours">{course.hours} total hours</p>
      </div>
    {/each}
  </div>
  <div class="references">
    <p class="etclabel">REFERENCES</p>
  </div>
</div>

<style>
  .etc {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
    line-height: 110%;
  }
  .etc > * {
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }
  .etclabel {
    font-weight: 700;
    margin-bottom: 1rem;
    background: var(--brown);
    mix-blend-mode: luminosity;
    padding: 0.2rem;
  }
  .education {
    display: flex;
    flex-direction: column;
  }
  .educ {
    margin-bottom: 0.75rem;
  }
  .degree {
    font-size: 0.85rem;
    font-weight: 500;
  }

  .school {
    font-size: 0.75rem;
  }
  .years {
    font-size: 0.75rem;
  }
  .courses {
    display: flex;
    flex-direction: column;
  }
  .course {
    margin-bottom: 0.75rem;
  }
  .courseTitle {
    font-size: 0.85rem;
    font-weight: 500;
  }
  .provider {
    font-size: 0.75rem;
  }
  .hours {
    font-size: 0.75rem;
  }
  .references {
  }
</style>
