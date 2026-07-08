interface Props{

progress:number;

budget:string;

deadline:string;

priority:string;

status:string;

}

export default function ProjectStats({

progress,

budget,

deadline,

priority,

status

}:Props){

return(

<div className="grid md:grid-cols-5 gap-5">

<div className="bg-blue-500 text-white rounded-xl p-5">

<h3>Progress</h3>

<p className="text-3xl font-bold">

{progress}%

</p>

</div>

<div className="bg-green-500 text-white rounded-xl p-5">

<h3>Budget</h3>

<p className="text-2xl">

{budget}

</p>

</div>

<div className="bg-purple-500 text-white rounded-xl p-5">

<h3>Deadline</h3>

<p>

{deadline}

</p>

</div>

<div className="bg-red-500 text-white rounded-xl p-5">

<h3>Priority</h3>

<p>

{priority}

</p>

</div>

<div className="bg-orange-500 text-white rounded-xl p-5">

<h3>Status</h3>

<p>

{status}

</p>

</div>

</div>

);

}