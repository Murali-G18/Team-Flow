interface Member{

name:string;

avatar:string;

}

interface Props{

members:Member[];

}

export default function TeamSection({

members

}:Props){

return(

<div className="bg-white rounded-2xl shadow p-6">

<h2 className="text-2xl font-bold mb-6">

Team Members

</h2>

<div className="flex gap-8">

{members.map(member=>(

<div
key={member.name}
className="text-center"
>

<img

src={member.avatar}

className="w-20 h-20 rounded-full mx-auto"

/>

<p className="mt-3">

{member.name}

</p>

</div>

))}

</div>

</div>

);

}