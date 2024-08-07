import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";
import Button1 from "../components/Button1";

const TrainingPrograms = () => {
  return (
    <>
      <Navbar1 />

      <div className="font-poppins w-full  min-h-screen bg-silver flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full  bg-primary text-white py-16 flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Training Programs
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 text-center">
            Explore our comprehensive training programs designed to kickstart
            your career.
          </p>
        </section>

        {/* Courses Section */}
        <section className="w-full px-[100px] sm:px-6 lg:px-8 py-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-3 mq550:grid-cols-1  md:grid-cols-2 gap-8">
              <div className="bg-white  shadow-lg rounded-lg overflow-hidden flex flex-col">
                <img
                  className="w-full h-48 object-cover"
                  alt="Python Tutorials"
                  src="/python.jpeg"
                />
                <div className="p-6 flex flex-col flex-1 justify-center items-center">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                    Python Tutorials
                  </h2>
                  <p className="text-gray-700 mb-4 text-justify">
                    Learn Python from scratch. This course covers all the basics
                    and advanced topics you need to become proficient in Python
                    programming.
                  </p>
                  <Button1 className="mt-auto " labelText="Enroll Now" />
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
                <img
                  className="w-full h-48 object-cover"
                  alt="Full Stack Development"
                  src="/full.jpeg"
                />
                <div className="p-6 flex flex-col flex-1 justify-center items-center">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                    Full Stack Development
                  </h2>
                  <p className="text-gray-700 mb-4 text-justify">
                    Master front-end and back-end development. This course
                    provides comprehensive training on web development using
                    popular frameworks.
                  </p>
                  <Button1 className="mt-auto" labelText="Enroll Now" />
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
                <img
                  className="w-full h-48 object-cover"
                  alt="Data Analytics"
                  src="/data.jpeg"
                />
                <div className="p-6 flex flex-col flex-1 justify-center items-center">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                    Data Analytics
                  </h2>
                  <p className="text-gray-700 mb-4 text-justify">
                    Gain insights from data. Learn data analysis techniques,
                    tools, and how to apply them to real-world scenarios.
                  </p>
                  <Button1 className="mt-auto" labelText="Enroll Now" />
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
                <img
                  className="w-full h-48 object-cover"
                  alt="Machine Learning"
                  src="/machine.jpeg"
                />
                <div className="p-6 flex flex-col flex-1 justify-center items-center">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                    Machine Learning
                  </h2>
                  <p className="text-gray-700 mb-4 text-justify">
                    Understand the fundamentals of machine learning and build
                    your own predictive models using popular libraries.
                  </p>
                  <Button1 className="mt-auto" labelText="Enroll Now" />
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
                <img
                  className="w-full h-48 object-cover"
                  alt="Mobile App Development"
                  src="/mobile.jpeg"
                />
                <div className="p-6 flex flex-col flex-1 justify-center items-center">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                    Mobile App Development
                  </h2>
                  <p className="text-gray-700 mb-4 text-justify">
                    Create mobile applications. This course covers development
                    for Android and iOS using popular frameworks.
                  </p>
                  <Button1 className="mt-auto" labelText="Enroll Now" />
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
                <img
                  className="w-full h-48 object-cover"
                  alt="Cloud Computing"
                  src="/cloud.jpeg"
                />
                <div className="p-6 flex flex-col flex-1 justify-center items-center">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                    Cloud Computing
                  </h2>
                  <p className="text-gray-700 mb-4 text-justify">
                    Explore cloud services and deployment models. Learn about
                    major cloud providers and how to architect scalable
                    applications.
                  </p>
                  <Button1 className="mt-auto" labelText="Enroll Now" />
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
                <img
                  className="w-full h-48 object-cover"
                  alt="DevOps"
                  src="/devops.jpeg"
                />
                <div className="p-6 flex flex-col flex-1 justify-center items-center">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                    DevOps
                  </h2>
                  <p className="text-gray-700 mb-4 text-justify">
                    Integrate development and operations. This course teaches
                    you about CI/CD pipelines, containerization, and automation
                    tools.
                  </p>
                  <Button1 className="mt-auto" labelText="Enroll Now" />
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
                <img
                  className="w-full h-48 object-cover"
                  alt="UI/UX Design"
                  src="/uiux.jpeg"
                />
                <div className="p-6 flex flex-col flex-1 justify-center items-center">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                    UI/UX Design
                  </h2>
                  <p className="text-gray-700 mb-4 text-justify">
                    Design user-friendly interfaces. Learn principles of user
                    experience and interface design, along with practical tools
                    and techniques.
                  </p>
                  <Button1 className="mt-auto" labelText="Enroll Now" />
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
                <img
                  className="w-full h-48 object-cover"
                  alt="CyberSecurity"
                  src="/cybersecurity.jpeg"
                />
                <div className="p-6 flex flex-col flex-1 justify-center items-center">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                    CyberSecurity
                  </h2>
                  <p className="text-gray-700 mb-4 text-justify">
                    Protect systems and networks. This course covers essential
                    concepts in cybersecurity and prepares you for industry
                    certifications.
                  </p>
                  <Button1 className="mt-auto" labelText="Enroll Now" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Student Achievements Section */}
        <section className="w-full bg-silver py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col max-w-md w-full">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
                Student Achievements
              </h2>
              <div className="flex flex-col items-center">
                <img
                  className="w-full h-40 object-cover rounded-t-lg mb-4"
                  alt="Achievement Image"
                  src="/achievement.jpeg" // Replace with your image path
                />
                <p className="text-lg text-gray-600 mb-8 text-center">
                  Explore the remarkable successes of our students and see how
                  they are transforming their careers with our training
                  programs.
                </p>
                <div className="flex justify-center">
                  <button className="border border-border-brand-default py-2 px-8 bg-gray-300 rounded-full flex items-center">
                    <span className="text-lg font-extrabold text-text-brand-on-brand">
                      Explore
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default TrainingPrograms