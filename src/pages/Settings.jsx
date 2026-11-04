
import { useState } from "react";
import { PageHeader, Card } from "../components/UI";
import { useAuth } from "../features/auth/AuthContext";

export default function Settings() {
  const { user } = useAuth();

  const [profile, setProfile] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    college: "",
    course: "",
    academicYear: "",
  });

  const [preferences, setPreferences] = useState({
    learningStyle: "",
    dailyStudyTime: "",
    interests: "",
    learningPace: "",
  });

  const [goals, setGoals] = useState({
    goalTitle: "",
    targetSkill: "",
    targetDate: "",
    weeklyStudyHours: "",
  });

  const [message, setMessage] = useState("");
  const [preferenceMessage, setPreferenceMessage] = useState("");
  const [goalMessage, setGoalMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setProfile((previous) => ({
      ...previous,
      [name]: value,
    }));

    setMessage("");
  }

  function handlePreferenceChange(event) {
    const { name, value } = event.target;

    setPreferences((previous) => ({
      ...previous,
      [name]: value,
    }));

    setPreferenceMessage("");
  }

  function handleGoalChange(event) {
    const { name, value } = event.target;

    setGoals((previous) => ({
      ...previous,
      [name]: value,
    }));

    setGoalMessage("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("Profile details saved in this session.");
  }

  function handlePreferenceSubmit(event) {
    event.preventDefault();
    setPreferenceMessage(
      "Learning preferences saved in this session."
    );
  }

  function handleGoalSubmit(event) {
    event.preventDefault();
    setGoalMessage("Learning goals saved in this session.");
  }

  return (
    <>
      <PageHeader
        title="Student Profile"
        description="Manage your personal information, learning preferences and goals."
      />

      <Card title="Personal Information">
        <form className="profile-form" onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            name="name"
            value={profile.name}
            onChange={handleChange}
            required
          />

          <label>Email Address</label>
          <input
            name="email"
            type="email"
            value={profile.email}
            onChange={handleChange}
            required
            disabled
          />

          <label>Phone Number</label>
          <input
            name="phone"
            type="tel"
            value={profile.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
          />

          <label>College Name</label>
          <input
            name="college"
            value={profile.college}
            onChange={handleChange}
            placeholder="Enter college name"
          />

          <label>Course</label>
          <input
            name="course"
            value={profile.course}
            onChange={handleChange}
            placeholder="Example: BCS"
          />

          <label>Academic Year</label>
          <select
            name="academicYear"
            value={profile.academicYear}
            onChange={handleChange}
          >
            <option value="">Select academic year</option>
            <option value="First Year">First Year</option>
            <option value="Second Year">Second Year</option>
            <option value="Third Year">Third Year</option>
            <option value="Final Year">Final Year</option>
          </select>

          <button type="submit" className="primary-button">
            Save Profile
          </button>

          {message && <p>{message}</p>}
        </form>
      </Card>

      <Card title="Learning Preferences">
        <form
          className="profile-form"
          onSubmit={handlePreferenceSubmit}
        >
          <label>Preferred Learning Style</label>
          <select
            name="learningStyle"
            value={preferences.learningStyle}
            onChange={handlePreferenceChange}
            required
          >
            <option value="">Select learning style</option>
            <option value="Videos">Video lessons</option>
            <option value="Reading">Reading and notes</option>
            <option value="Practice">Hands-on practice</option>
            <option value="Projects">Project-based learning</option>
            <option value="Mixed">Combination of all</option>
          </select>

          <label>Daily Available Study Time</label>
          <select
            name="dailyStudyTime"
            value={preferences.dailyStudyTime}
            onChange={handlePreferenceChange}
            required
          >
            <option value="">Select study time</option>
            <option value="1 hour">1 hour</option>
            <option value="2 hours">2 hours</option>
            <option value="3 hours">3 hours</option>
            <option value="4 hours">4 hours</option>
            <option value="5+ hours">5+ hours</option>
          </select>

          <label>Topics of Interest</label>
          <input
            name="interests"
            value={preferences.interests}
            onChange={handlePreferenceChange}
            placeholder="Example: Python, AI, Web Development"
          />

          <label>Preferred Learning Pace</label>
          <select
            name="learningPace"
            value={preferences.learningPace}
            onChange={handlePreferenceChange}
            required
          >
            <option value="">Select learning pace</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          <button type="submit" className="primary-button">
            Save Preferences
          </button>

          {preferenceMessage && <p>{preferenceMessage}</p>}
        </form>
      </Card>

      <Card title="Learning Goals">
        <form
          className="profile-form"
          onSubmit={handleGoalSubmit}
        >
          <label>What is your learning goal?</label>
          <input
            name="goalTitle"
            value={goals.goalTitle}
            onChange={handleGoalChange}
            placeholder="Example: Become a Full Stack Developer"
            required
          />

          <label>Skill You Want to Learn</label>
          <input
            name="targetSkill"
            value={goals.targetSkill}
            onChange={handleGoalChange}
            placeholder="Example: Python, Django, React"
            required
          />

          <label>Target Completion Date</label>
          <input
            name="targetDate"
            type="date"
            value={goals.targetDate}
            onChange={handleGoalChange}
            min={new Date().toISOString().split("T")[0]}
            required
          />

          <label>Weekly Study Target</label>
          <select
            name="weeklyStudyHours"
            value={goals.weeklyStudyHours}
            onChange={handleGoalChange}
            required
          >
            <option value="">Select weekly study hours</option>
            <option value="5">5 hours</option>
            <option value="10">10 hours</option>
            <option value="15">15 hours</option>
            <option value="20">20 hours</option>
            <option value="25">25+ hours</option>
          </select>

          <button type="submit" className="primary-button">
            Save Learning Goals
          </button>

          {goalMessage && <p>{goalMessage}</p>}
        </form>
      </Card>
    </>
  );
}
