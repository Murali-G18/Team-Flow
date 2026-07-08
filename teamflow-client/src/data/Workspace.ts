export interface WorkspaceTask {
  id: string;
  title: string;
  completed: boolean;
}

export interface WorkspaceMember {
  name: string;
  avatar: string;
}

export interface WorkspaceComment {
  id: string;
  user: string;
  comment: string;
}

export interface WorkspaceActivity {
  id: string;
  action: string;
  date: string;
}

export const workspace = {

  projectName: "TeamFlow Dashboard",

  progress: 78,

  deadline: "25 Aug 2026",

  priority: "High",

  status: "In Progress",

  budget: "$18,000",

  members: [

    {
      name: "Sai",
      avatar: "https://i.pravatar.cc/150?img=12"
    },

    {
      name: "Rahul",
      avatar: "https://i.pravatar.cc/150?img=13"
    },

    {
      name: "Priya",
      avatar: "https://i.pravatar.cc/150?img=14"
    }

  ],

  tasks: [

    {
      id:"1",
      title:"Login Page",
      completed:true
    },

    {
      id:"2",
      title:"Dashboard",
      completed:true
    },

    {
      id:"3",
      title:"Kanban",
      completed:false
    }

  ],

  comments:[

    {
      id:"1",
      user:"Sai",
      comment:"Dashboard looks good."
    },

    {
      id:"2",
      user:"Rahul",
      comment:"API integration started."
    }

  ],

  activity:[

    {
      id:"1",
      action:"Project Created",
      date:"1 Jul"
    },

    {
      id:"2",
      action:"Sprint Started",
      date:"5 Jul"
    },

    {
      id:"3",
      action:"Dashboard Completed",
      date:"12 Jul"
    }

  ]

}