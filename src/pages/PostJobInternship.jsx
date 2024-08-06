import React, { useState } from 'react';

const PostJobInternship = () => {
  const [form, setForm] = useState({
    opportunityType: 'internship',
    profile: '',
    skills: '',
    internshipType: 'office',
    partFullTime: 'full-time',
    openings: '',
    startDate: 'immediately',
    duration: '',
    durationUnit: 'months',
    responsibilities: ['', '', ''],
    preferences: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleResponsibilityChange = (index, value) => {
    const newResponsibilities = [...form.responsibilities];
    newResponsibilities[index] = value;
    setForm((prevForm) => ({ ...prevForm, responsibilities: newResponsibilities }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Post Internship/Job</h1>
      <p className="text-center mb-6">Hire early talent with work experience up to 2 years</p>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-bold mb-2">Opportunity type</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="opportunityType"
                value="internship"
                checked={form.opportunityType === 'internship'}
                onChange={handleChange}
                className="mr-2"
              />
              Internship
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="opportunityType"
                value="job"
                checked={form.opportunityType === 'job'}
                onChange={handleChange}
                className="mr-2"
              />
              Job
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2">Internship profile</label>
          <input
            type="text"
            name="profile"
            value={form.profile}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="e.g. Android App Development"
          />
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2">Skills required (Optional)</label>
          <input
            type="text"
            name="skills"
            value={form.skills}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="e.g. Java"
          />
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2">Internship type</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="internshipType"
                value="office"
                checked={form.internshipType === 'office'}
                onChange={handleChange}
                className="mr-2"
              />
              In office
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="internshipType"
                value="hybrid"
                checked={form.internshipType === 'hybrid'}
                onChange={handleChange}
                className="mr-2"
              />
              Hybrid
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="internshipType"
                value="remote"
                checked={form.internshipType === 'remote'}
                onChange={handleChange}
                className="mr-2"
              />
              Remote
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2">Part-time/Full-time</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="partFullTime"
                value="part-time"
                checked={form.partFullTime === 'part-time'}
                onChange={handleChange}
                className="mr-2"
              />
              Part-time
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="partFullTime"
                value="full-time"
                checked={form.partFullTime === 'full-time'}
                onChange={handleChange}
                className="mr-2"
              />
              Full-time
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2">Number of openings</label>
          <input
            type="number"
            name="openings"
            value={form.openings}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="e.g. 4"
            required
          />
          {form.openings === '' && <p className="text-red-500 text-sm">This field is required</p>}
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2">Internship start date</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="startDate"
                value="immediately"
                checked={form.startDate === 'immediately'}
                onChange={handleChange}
                className="mr-2"
              />
              Immediately (within next 30 days)
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="startDate"
                value="later"
                checked={form.startDate === 'later'}
                onChange={handleChange}
                className="mr-2"
              />
              Later
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2">Internship duration</label>
          <div className="flex items-center gap-4">
            <input
              type="number"
              name="duration"
              value={form.duration}
              onChange={handleChange}
              className="w-20 border border-gray-300 p-2 rounded"
              placeholder="Choose duration"
            />
            <select
              name="durationUnit"
              value={form.durationUnit}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded"
            >
              <option value="weeks">weeks</option>
              <option value="months">months</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2">Intern's responsibilities</label>
          {form.responsibilities.map((responsibility, index) => (
            <input
              key={index}
              type="text"
              value={responsibility}
              onChange={(e) => handleResponsibilityChange(index, e.target.value)}
              className="w-full border border-gray-300 p-2 rounded mb-2"
              placeholder={`Responsibility ${index + 1}`}
            />
          ))}
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2">Additional candidate preferences</label>
          <input
            type="text"
            name="preferences"
            value={form.preferences}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="e.g. Candidates pursuing Computer Science Engineering Preferred"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded font-bold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostJobInternship;
