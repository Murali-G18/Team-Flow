interface Props{
title:string;
}

export default function ProjectHeader({
title
}:Props){

return(

<div className="bg-white rounded-2xl shadow p-6">

<h1 className="text-4xl font-bold">

{title}

</h1>

<p className="text-slate-500 mt-2">

Project Workspace

</p>

</div>

);

}