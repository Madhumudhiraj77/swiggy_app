import profileImg from "../assets/profile-img.jpg";

const Profile = () => {
  return (
    <div className="flex justify-center items-center py-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 md:w-8/12 lg:w-6/12  text-center">
        <img
          src={profileImg}
          alt="Profile"
          className="w-28 h-28 rounded-full mx-auto border-4 border-orange-500 "
        />
        <h2 className="text-2xl font-bold text-gray-800 mt-4">
          Kolthuru Madhu Mudiraj
        </h2>
        <p className="text-gray-600 font-semibold">Front-End Engineer</p>
        <p className="text-sm text-gray-500">2 Years Experience</p>

        <p className="mt-4 text-gray-700 text-sm">
          Front-End Engineer with 2 years of experience in React.js, HTML, CSS,
          and JavaScript, passionate about building responsive and user-friendly
          web applications. Seeking to contribute my skills to a dynamic
          development team.
        </p>

        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-700">Skills</h3>
          <div className="flex flex-wrap justify-center mt-2">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React.js",
              "Redux",
              "Bootstrap",
              "Tailwind CSS",
              "SQL Server",
              "MySQL",
              "Git",
              "GitHub",
              "VS Code",
            ].map((skill) => (
              <span
                key={skill}
                className=" bg-orange-500 text-white  text-sm font-medium px-3 py-1 rounded-lg m-1"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 text-left text-gray-700 text-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-2 text-center">
            Contact
          </h3>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:madhumudhiraj77@gmail.com"
              className="text-blue-600 hover:underline"
            >
              madhumudhiraj77@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong> 8121821609
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/madhumudiraj123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              linkedin.com/in/madhumudiraj123
            </a>
          </p>
        </div>

        <div className="mt-6">
          <a
            href="https://drive.google.com/file/d/1P7ouK3vXqPj36uaGBTdq8fSQj4Im-dJT/view?usp=drive_link" // Replace with your actual resume link
            download
            className=" bg-orange-500 text-white  px-4 py-2 rounded-lg hover:bg-orange-700 transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
