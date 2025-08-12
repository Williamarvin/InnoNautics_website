import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "William Arvin Fisilo",
    role: "Software Engineer",
    image: "/images/William_Pic.JPG",
    bio: "Expert in autonomous navigation systems and AI-driven water mobility solutions.",
    skills: ["AI/ML", "Navigation Systems", "React", "Python"],
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Howard Ho Yin Lee", 
    role: "Electronics Engineer",
    image: "/images/Howard_Pic.JPG",
    bio: "Specializes in marine electronics, control systems, and sensor integration for water vehicles.",
    skills: ["Circuit Design", "IoT", "Sensors", "Control Systems"],
    social: {
      linkedin: "#",
      github: "#", 
      twitter: "#"
    }
  },
  {
    name: "Echo Chen",
    role: "Mechanical Engineer", 
    image: "/images/Echo_Pic.JPG",
    bio: "Designs and optimizes mechanical systems for water mobility devices and marine applications.",
    skills: ["CAD Design", "Fluid Dynamics", "Materials", "Prototyping"],
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  }
];

const achievements = [
  {
    icon: "fas fa-trophy",
    title: "International Competition Winners",
    description: "Multiple awards in marine technology competitions"
  },
  {
    icon: "fas fa-users",
    title: "Multidisciplinary Team",
    description: "Mechanical, software, and electronics engineers"
  },
  {
    icon: "fas fa-rocket",
    title: "Innovation Track Record",
    description: "Proven success in autonomous marine systems"
  }
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-deep-marine text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-heading font-bold text-5xl md:text-6xl text-white mb-6 tracking-tight">
            Our Team
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            Mechanical, software, and electronics engineers with a track record of winning international competitions.
          </p>
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-tech-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${achievement.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="font-semibold text-xl mb-2 text-electric-cyan">{achievement.title}</h3>
              <p className="text-gray-300">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 group">
              <CardContent className="p-6 text-center">
                {/* Avatar */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto mb-4 relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full border-4 border-electric-cyan/50 group-hover:border-electric-cyan transition-colors duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-tech-blue/20 to-transparent rounded-full"></div>
                  </div>
                </div>

                {/* Info */}
                <div className="mb-6">
                  <h4 className="font-heading font-bold text-xl text-white mb-2">{member.name}</h4>
                  <p className="text-electric-cyan font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-innovation-teal/20 text-innovation-teal text-xs rounded-full border border-innovation-teal/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <a 
                    href={member.social.linkedin}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300 group/social"
                  >
                    <i className="fab fa-linkedin text-white group-hover/social:text-electric-cyan transition-colors"></i>
                  </a>
                  <a 
                    href={member.social.github}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300 group/social"
                  >
                    <i className="fab fa-github text-white group-hover/social:text-electric-cyan transition-colors"></i>
                  </a>
                  <a 
                    href={member.social.twitter}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300 group/social"
                  >
                    <i className="fab fa-twitter text-white group-hover/social:text-electric-cyan transition-colors"></i>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="font-heading font-bold text-2xl text-white mb-4">
              Join Our Mission
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals passionate about marine technology and autonomous systems. 
              Let's shape the future of water mobility together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact"
                className="bg-tech-blue text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors duration-300 inline-flex items-center justify-center"
              >
                <i className="fas fa-envelope mr-2"></i>
                Contact Us
              </a>
              <a 
                href="#"
                className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-deep-marine transition-colors duration-300 inline-flex items-center justify-center"
              >
                <i className="fas fa-briefcase mr-2"></i>
                View Careers
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}