import React, { useState } from "react";
import "../styles/Skills.css";
import { motion } from "framer-motion";

// Skills data - template variable from backend
const SkillsData = [ {
  "category" : "Design & Creativity",
  "skills" : [ {
    "name" : "Adobe After Effects",
    "icon" : "adobeaftereffects.png"
  }, {
    "name" : "Adobe Audition",
    "icon" : "adobeaudition.png"
  }, {
    "name" : "Adobe Lightroom",
    "icon" : "adobelightroom.png"
  }, {
    "name" : "Adobe Premiere Pro",
    "icon" : "adobepremierepro.png"
  }, {
    "name" : "Camtasia",
    "icon" : "camtasia.png"
  }, {
    "name" : "Canva",
    "icon" : "canva.png"
  }, {
    "name" : "Figma",
    "icon" : "figma.png"
  } ]
}, {
  "category" : "Web Development",
  "skills" : [ {
    "name" : "Bootstrap",
    "icon" : "bootstrap.png"
  }, {
    "name" : "Next.js",
    "icon" : "next.js.png"
  }, {
    "name" : "Node.js",
    "icon" : "nodejs.png"
  }, {
    "name" : "npm",
    "icon" : "npm.png"
  }, {
    "name" : "React",
    "icon" : "react.png"
  }, {
    "name" : "Tailwind CSS",
    "icon" : "tailwindcss.png"
  }, {
    "name" : "JavaScript",
    "icon" : "javascript.png"
  }, {
    "name" : "HTML",
    "icon" : "html.png"
  } ]
}, {
  "category" : "Programming Languages",
  "skills" : [ {
    "name" : "Bash",
    "icon" : "bash.png"
  }, {
    "name" : "C",
    "icon" : "c.png"
  }, {
    "name" : "C#",
    "icon" : "csharp.png"
  }, {
    "name" : "Python",
    "icon" : "python.png"
  }, {
    "name" : "Java",
    "icon" : "java.png"
  } ]
}, {
  "category" : "Database & ORM",
  "skills" : [ {
    "name" : "PostgreSQL",
    "icon" : "postgresql.png"
  }, {
    "name" : "Oracle",
    "icon" : "oraclelogo.png"
  }, {
    "name" : "MySQL",
    "icon" : "mysql.png"
  } ]
}, {
  "category" : "Data Science & ML",
  "skills" : [ {
    "name" : "Colab",
    "icon" : "colab.png"
  }, {
    "name" : "OpenCV",
    "icon" : "opencv.png"
  }, {
    "name" : "Pandas",
    "icon" : "pandas.png"
  }, {
    "name" : "Scikit-learn",
    "icon" : "scikitlearn.png"
  }, {
    "name" : "Jupyter",
    "icon" : "jupyter.png"
  }, {
    "name" : "Keras",
    "icon" : "keras.png"
  }, {
    "name" : "Seaborn",
    "icon" : "seaborn.png"
  }, {
    "name" : "Tableau",
    "icon" : "tableausoftware.png"
  }, {
    "name" : "Matplotlib",
    "icon" : "matplotlib.png"
  }, {
    "name" : "TensorFlow",
    "icon" : "tensorflow.png"
  }, {
    "name" : "NumPy",
    "icon" : "numpy.png"
  }, {
    "name" : "Power BI",
    "icon" : "powerbi.png"
  } ]
}, {
  "category" : "DevOps & Cloud",
  "skills" : [ {
    "name" : "Docker",
    "icon" : "docker.png"
  } ]
}, {
  "category" : "Office & Productivity",
  "skills" : [ {
    "name" : "Microsoft Excel",
    "icon" : "microsoftexcel.png"
  }, {
    "name" : "Microsoft PowerPoint",
    "icon" : "microsoftpowerpoint.png"
  }, {
    "name" : "Microsoft Word",
    "icon" : "microsoftword.png"
  } ]
}, {
  "category" : "Game Development",
  "skills" : [ {
    "name" : "Unity",
    "icon" : "unity.png"
  } ]
}, {
  "category" : "Version Control & CI/CD",
  "skills" : [ {
    "name" : "Git",
    "icon" : "git.png"
  }, {
    "name" : "GitHub",
    "icon" : "github.png"
  } ]
}, {
  "category" : "Operating Systems & Platforms",
  "skills" : [ {
    "name" : "Ubuntu Studio",
    "icon" : "ubuntustudio.png"
  } ]
}, {
  "category" : "IDEs & Editors",
  "skills" : [ {
    "name" : "JetBrains",
    "icon" : "jetbrains.png"
  }, {
    "name" : "Visual Studio Code",
    "icon" : "visualstudiocode.png"
  } ]
}, {
  "category" : "Other Tools",
  "skills" : [ {
    "name" : "Maven",
    "icon" : "maven.png"
  }, {
    "name" : "LaTeX",
    "icon" : "latex.png"
  } ]
} ];

// Fallback icon resolver
const resolveIcon = (icon) => {
  try {
    return require(`../images/${icon}`);
  } catch (error) {
    // Simple SVG placeholder for missing icons
    return `data:image/svg+xml;base64,${btoa(`
      <svg width="60" height="60" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="72" height="72" rx="12" fill="#ececec" />
        <text x="36" y="40" text-anchor="middle" fill="#bbb" font-size="24">?</text>
      </svg>
    `)}`;
  }
};

const PAGE_SIZE = 24; // Number of skills to show per category by default

const Skills = () => {
  // Maintain visibleCount for each category for "Show More" functionality
  const [visibleCounts, setVisibleCounts] = useState(
    SkillsData.map(category => Math.min(category.skills.length, PAGE_SIZE))
  );

  // Calculate total number of skills
  const totalSkills = SkillsData.reduce((acc, cat) => acc + (cat.skills?.length || 0), 0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const headingVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const categoryVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const skillVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  // Handler to show more skills in a category
  const handleShowMore = (categoryIndex) => {
    setVisibleCounts(prevCounts =>
      prevCounts.map((count, idx) =>
        idx === categoryIndex
          ? Math.min(count + PAGE_SIZE, SkillsData[categoryIndex].skills.length)
          : count
      )
    );
  };

  // Handler to show less skills in a category
  const handleShowLess = (categoryIndex) => {
    setVisibleCounts(prevCounts =>
      prevCounts.map((count, idx) =>
        idx === categoryIndex
          ? PAGE_SIZE
          : count
      )
    );
  };

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills-wrapper">
          {/* Section Header */}
          <motion.div
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="heading"
          >
            <span className="heading-sub-text">Technical Expertise</span>
            <h2 className="heading-text">Skills & Technologies</h2>
            <div className="heading-divider"></div>
          </motion.div>

          {/* Skills Categories */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="skills-categories"
          >
            {SkillsData.map((category, categoryIndex) => {
              const visibleCount = visibleCounts[categoryIndex] || PAGE_SIZE;
              const skillsToShow = category.skills.slice(0, visibleCount);
              const hasMore = visibleCount < category.skills.length;
              const hasLess = visibleCount > PAGE_SIZE;

              return (
                <motion.div
                  key={categoryIndex}
                  variants={categoryVariants}
                  className="skill-category-block"
                >
                  <h3 className="category-title">{category.category}</h3>
                  <div className="category-divider"></div>
                  <div className="skills-grid simple-skill-icons">
                    {skillsToShow.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        variants={skillVariants}
                        className="simple-skill"
                        whileHover={{
                          y: -8,
                          scale: 1.05,
                          transition: { duration: 0.3 }
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <img
                          className="skill-img"
                          src={resolveIcon(skill.icon)}
                          alt={skill.name}
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                          loading="lazy"
                        />
                        <p className="skill-name">{skill.name}</p>
                      </motion.div>
                    ))}
                  </div>
                  {(hasMore || hasLess) && (
                    <div style={{ textAlign: "center", marginTop: "1rem" }}>
                      {hasMore && (
                        <button
                          className="show-more-btn"
                          onClick={() => handleShowMore(categoryIndex)}
                          type="button"
                        >
                          Show More
                        </button>
                      )}
                      {hasLess && (
                        <button
                          className="show-less-btn"
                          onClick={() => handleShowLess(categoryIndex)}
                          type="button"
                          style={{ marginLeft: 12 }}
                        >
                          Show Less
                        </button>
                      )}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Total Skills Counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="skills-summary"
          >
            <div className="skills-total">
              Total Skills: {totalSkills}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;