import { Card, Link } from "@nextui-org/react";

export default function Mosaic() {
  const sizeToGridSpan = (size) => {
    switch (size) {
      case "large":
        return { gridColumn: "span 2", gridRow: "span 2" };
      case "medium":
        return { gridColumn: "span 2" };
      case "small":
      default:
        return {};
    }
  };

  const projects = [
    {
      title: "Project 1",
      description: "This is a description of project 1.",
      technology: "React",
      link: "https://example.com/project1",
    },
    {
      title: "Project 2",
      description: "This is a description of project 2.",
      technology: "Next.js",
      link: "https://example.com/project2",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        // gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        gap: "20px",
        alignItems: "stretch",
      }}
    >
      {projects.map((project, index) => (
        <Card
          key={index}
          css={{
            height: "auto",
            ...sizeToGridSpan(project.size),
          }}
        >
          <Card.Body>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <small>{project.technology}</small>
            <Link href={project.link}>Learn More</Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
