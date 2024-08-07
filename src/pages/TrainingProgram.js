import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";
import Button1 from "../components/Button1";

const TrainingPrograms = () => {
  return (
    <>
      <Navbar1 />

      <div className="font-poppins w-full min-h-screen bg-silver flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full bg-primary text-white py-16 flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-4">Training Programs</h1>
          <p className="text-xl mb-6">Explore our comprehensive training programs designed to kickstart your career.</p>
        </section>

        {/* Courses Section */}
        <section className="w-full px-72 py-12 grid grid-cols-3 justify-center gap-10">
          <div className="w-full max-w-sm bg-white shadow-lg mx-4 rounded-lg overflow-hidden flex flex-col">
            <img
              className="w-full h-48 object-cover"
              alt="Python Tutorials"
              src="/python.jpeg"
            />
            <div className="font-poppins text-center p-6 flex flex-col flex-1">
              <h2 className="text-2xl font-semibold mb-2">Python Tutorials</h2>
              <p className="text-gray-700 mb-4 text-justify font-poppins">
                Learn Python from scratch. This course covers all the basics and advanced topics you need to become proficient in Python programming.
              </p>
              <Button1 className="mr-12 mt-auto self-end" labelText="Enroll Now" />
            </div>
          </div>

          <div className="w-full max-w-sm bg-white shadow-lg mx-4 rounded-lg overflow-hidden flex flex-col">
            <img
              className="w-full h-48 object-cover"
              alt="Full Stack Development"
              src="/full.jpeg"
            />
            <div className="text-center p-6 flex flex-col flex-1">
              <h2 className="text-2xl font-semibold mb-2">Full Stack Development</h2>
              <p className="text-gray-700 mb-4 text-justify">
                Master front-end and back-end development. This course provides comprehensive training on web development using popular frameworks.
              </p>
              <Button1 className="mr-12 mt-auto self-end" labelText="Enroll Now" />
            </div>
          </div>

          <div className="w-full max-w-sm bg-white shadow-lg mx-4 rounded-lg overflow-hidden flex flex-col">
            <img
              className="w-full h-48 object-cover"
              alt="Data Analytics"
              src="/data.jpeg"
            />
            <div className="text-center p-6 flex flex-col flex-1"> 
              <h2 className="text-2xl font-semibold mb-2">Data Analytics</h2>
              <p className="text-gray-700 mb-4 text-justify">
                Gain insights from data. Learn data analysis techniques, tools, and how to apply them to real-world scenarios.
              </p>
              <Button1 className="mr-12 mt-auto self-end" labelText="Enroll Now" />
            </div>
          </div>

          <div className="w-full max-w-sm bg-white shadow-lg mx-4 rounded-lg overflow-hidden flex flex-col">
            <img
              className="w-full h-48 object-cover"
              alt="Machine Learning"
              src="/machine.jpeg"
            />
            <div className="text-center p-6 flex flex-col flex-1"> 
              <h2 className="text-2xl font-semibold mb-2">Machine Learning</h2>
              <p className="text-gray-700 mb-4 text-justify">
                Understand the fundamentals of machine learning and build your own predictive models using popular libraries.
              </p>
              <Button1 className="mr-12 mt-auto self-end" labelText="Enroll Now" />
            </div>
          </div>

          <div className="w-full max-w-sm bg-white shadow-lg mx-4 rounded-lg overflow-hidden flex flex-col">
            <img
              className="w-full h-48 object-cover"
              alt="Mobile App Development"
              src="/mobile.jpeg"
            />
            <div className="text-center p-6 flex flex-col flex-1"> 
              <h2 className="text-2xl font-semibold mb-2">Mobile App Development</h2>
              <p className="text-gray-700 mb-4 text-justify">
                Create mobile applications. This course covers development for Android and iOS using popular frameworks.
              </p>
              <Button1 className="mr-12 mt-auto self-end" labelText="Enroll Now" />
            </div>
          </div>

          <div className="w-full max-w-sm bg-white shadow-lg mx-4 rounded-lg overflow-hidden flex flex-col">
            <img
              className="w-full h-48 object-cover"
              alt="Cloud Computing"
              src="/cloud.jpeg"
            />
            <div className="text-center p-6 flex flex-col flex-1"> 
              <h2 className="text-2xl font-semibold mb-2">Cloud Computing</h2>
              <p className="text-gray-700 mb-4 text-justify">
                Explore cloud services and deployment models. Learn about major cloud providers and how to architect scalable applications.
              </p>
              <Button1 className="mr-12 mt-auto self-end" labelText="Enroll Now" />
            </div>
          </div>

          <div className="w-full max-w-sm bg-white shadow-lg mx-4 rounded-lg overflow-hidden flex flex-col">
            <img
              className="w-full h-48 object-cover"
              alt="DevOps"
              src="/devops.jpeg"
            />
            <div className="text-center p-6 flex flex-col flex-1"> 
              <h2 className="text-2xl font-semibold mb-2">DevOps</h2>
              <p className="text-gray-700 mb-4 text-justify">
                Integrate development and operations. This course teaches you about CI/CD pipelines, containerization, and automation tools.
              </p>
              <Button1 className="mr-12 mt-auto self-end" labelText="Enroll Now" />
            </div>
          </div>

          <div className="w-full max-w-sm bg-white shadow-lg mx-4 rounded-lg overflow-hidden flex flex-col">
            <img
              className="w-full h-48 object-cover"
              alt="UI/UX Design"
              src="/uiux.jpeg"
            />
            <div className="text-center p-6 flex flex-col flex-1"> 
              <h2 className="text-2xl font-semibold mb-2">UI/UX Design</h2>
              <p className="text-gray-700 mb-4 text-justify">
                Design user-friendly interfaces. Learn principles of user experience and interface design, along with practical tools and techniques.
              </p>
              <Button1 className="mr-12 mt-auto self-end" labelText="Enroll Now" />
            </div>
          </div>

          <div className="w-full max-w-sm bg-white shadow-lg mx-4 rounded-lg overflow-hidden flex flex-col">
            <img
              className="w-full h-48 object-cover"
              alt="CyberSecurity"
              src="/cybersecurity.jpeg"
            />
            <div className="text-center p-6 flex flex-col flex-1"> 
              <h2 className="text-2xl font-semibold mb-2">CyberSecurity</h2>
              <p className="text-gray-700 mb-4 text-justify">
                Protect systems and networks. This course covers essential concepts in cybersecurity and prepares you for industry certifications.
              </p>
              <Button1 className="mr-12 mt-auto self-end" labelText="Enroll Now" />
            </div>
          </div>
        </section>

        <section className="w-full bg-silver py-12">
          <div className="container mx-auto px-4 flex justify-center">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 flex flex-col">
              <h2 className="text-3xl font-bold mb-6 text-center">Student Achievements</h2>
              <div className="flex flex-wrap justify-center gap-6">
                {/* Achievement Card */}
                <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 flex flex-col">
                  <img
                    className="w-full h-40 object-cover rounded-t-lg mb-4"
                    alt="Achievement Image"
                    src="/achievement.jpeg" // Replace with your image path
                  />
                  <p className="text-lg text-gray-600 mb-8 text-center flex-1">
                    Explore the remarkable successes of our students and see how they are transforming their careers with our training programs.
                  </p>
                  <div className="flex justify-center mt-4">
                    <button className="cursor-pointer border border-border-brand-default py-2 px-8 bg-gray-300 rounded-full flex items-center">
                      <span className="text-lg font-extrabold text-text-brand-on-brand">Explore</span>
                    </button>
                  </div>
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

export default TrainingPrograms;
