import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Our top sessions are designed to help you burn fat, build strength,
          and boost stamina. Each workout is guided by certified trainers and
          includes warm-ups, core drills, strength exercises, and cool-down
          stretches. Whether you're a beginner or a pro, you'll find workouts
          that match your pace while challenging you to grow.
        </p>
        <p>
          Consistent training improves heart health, mental clarity, and overall
          energy levels. Join our community and experience the difference of
          results-driven fitness.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Our bootcamps are immersive, high-intensity programs tailored to
          maximize transformation. Each program blends expert coaching, group
          motivation, and functional training — the perfect formula to achieve
          your fitness goals faster.
        </p>
        <p>
          All bootcamps include progress tracking, nutritional guidance, and
          personalized tips to keep you accountable. Limited slots available —
          secure yours today!
        </p>
        <div className="bootcamps">
          <div>
            <h4>Fat Burn Intensive</h4>
            <p>
              Burn up to 600 calories per session! This high-intensity interval
              training (HIIT) program boosts your metabolism and sheds stubborn
              fat fast.
            </p>
          </div>
          <div>
            <h4>Strength & Sculpt</h4>
            <p>
              Focus on muscle development, core power, and balance. This
              bootcamp uses resistance bands, dumbbells, and bodyweight to tone
              and define.
            </p>
          </div>
          <div>
            <h4>Morning Power Boost</h4>
            <p>
              Designed for early risers! A perfect blend of cardio, stretching,
              and mobility to jumpstart your metabolism and keep you energized
              all day.
            </p>
          </div>
          <div>
            <h4>Weekend Warrior Challenge</h4>
            <p>
              Two-day high-performance training for busy professionals. Features
              outdoor sessions, team challenges, and mental toughness circuits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
