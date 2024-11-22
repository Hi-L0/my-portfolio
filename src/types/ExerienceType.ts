type experienceType ={
    id:number,
    start_date:string;
    end_date:string;
    company:string;
    post:{
        title:string;
        description:string;
        tech_used?:string[];
        project_url?:string;
    }
}