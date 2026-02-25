import { motion } from "framer-motion"
import { Mail, Github, Linkedin } from "lucide-react"
import profile from "./assets/Yashi.jpeg"

function App() {
  return (
    <div className="bg-white text-slate-800 scroll-smooth">

      {/* ===== NAVBAR ===== */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-semibold text-lg">Yashi Jain</h1>
          <div className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-black transition">About</a>
            <a href="#projects" className="hover:text-black transition">Projects</a>
            <a href="#contact" className="hover:text-black transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="min-h-screen flex items-center pt-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Hi, I'm Yashi Jain
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              AI/ML & Python Developer building intelligent and scalable backend systems.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#projects"
                className="border border-slate-800 px-6 py-3 rounded-xl hover:bg-slate-800 hover:text-white transition"
              >
                View Projects
              </a>

              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition"
              >
                View Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src={profile}
              alt="Yashi Jain"
              className="w-64 h-64 object-cover rounded-2xl shadow-md"
            />
          </motion.div>

        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="py-24 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-12">About</h3>

          <div className="grid md:grid-cols-2 gap-16">

            {/* Profile Summary */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Profile Summary</h4>
              <p className="text-slate-600 leading-relaxed">
                Python Backend Developer experienced in building secure and scalable web applications 
                using FastAPI, Flask, and SQLAlchemy. Strong understanding of REST architecture, 
                JWT authentication, OTP systems, and database optimization. 
                Focused on writing efficient, maintainable code while enhancing backend performance.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Skills</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "Python",
                  "FastAPI",
                  "Flask",
                  "SQL",
                  "Machine Learning",
                  "Artificial Intelligence",
                  "JWT Authentication",
                  "React",
                  "Git",
                  "Data Structures & Algorithms",
                  "API Integration",
                  "OOP"
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 text-sm bg-slate-100 rounded-full border border-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="py-24 border-t border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-12">Projects</h3>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Elysia – AI Powered Chat App",
                desc: "FastAPI backend with JWT authentication, OTP reset, SQLAlchemy ORM and OpenAI GPT integration."
              },
              {
                title: "Password Generator Web App",
                desc: "Secure Flask-based application with authentication, OTP reset and SQLite storage."
              },
              {
                title: "Job Recommendation System",
                desc: "Web-based job recommendation platform using Python-based logic and backend integration."
              },
              {
                title: "AI Exam Proctoring System",
                desc: "Computer vision system detecting suspicious activities during online exams."
              },
              {
                title: "AI Powered Personal Finance Assistant",
                desc: "Intelligent assistant for expense tracking, budgeting insights and financial analysis."
              },
              {
                title: "Task Manager Web App",
                desc: "CRUD-based task management system with authentication and clean UI design."
              }
            ].map((project, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition"
              >
                <h4 className="font-semibold text-lg">{project.title}</h4>
                <p className="text-slate-600 mt-3 text-sm">
                  {project.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-24 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-6">Contact</h3>

          <div className="space-y-6 flex flex-col items-center text-slate-700">

            <a
              href="mailto:yashi2212.jain@gmail.com"
              className="flex items-center gap-3 hover:text-black transition"
            >
              <Mail size={20} />
              <span className="underline">yashi2212.jain@gmail.com</span>
            </a>

            <a
              href="https://linkedin.com/in/yashijain22"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-black transition"
            >
              <Linkedin size={20} />
              <span className="underline">linkedin.com/in/yashijain22</span>
            </a>

            <a
              href="https://github.com/yashijain22"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-black transition"
            >
              <Github size={20} />
              <span className="underline">github.com/yashijain22</span>
            </a>

          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-10 border-t border-slate-200 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Yashi Jain
      </footer>

    </div>
  )
}

export default App