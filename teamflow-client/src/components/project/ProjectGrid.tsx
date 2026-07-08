import ProjectCard from "./ProjectCard";

const projects=[

{
id:1,
name:"Enterprise CRM",
description:"Customer Relationship Management",
status:"Active",
progress:75,
members:12,
tasks:45
},

{
id:2,
name:"HR Portal",
description:"Employee Management System",
status:"Planning",
progress:42,
members:8,
tasks:21
},

{
id:3,
name:"E-Commerce",
description:"Shopping Platform",
status:"Development",
progress:60,
members:15,
tasks:120
}

];

export default function ProjectGrid(){

return(

<div className="grid gap-6 lg:grid-cols-2">

{
projects.map(project=>

<ProjectCard
key={project.id}
project={project}
/>

)
}

</div>

)

}