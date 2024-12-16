import icon1 from "../../public/table_left_align.png"
import { Link } from "react-router-dom";

const tableContent=[{link:"admin",name:"प्रशासन",name_eng:"Heading 1",num:"00",num2:"200",job:"To be Written",by:"boardadmin",date:"10 Sep 2024, 16:51"},
    {link:"admin",name:"प्रशासन",name_eng:"Heading 2",num:"00",num2:"200",job:"To be Written",by:"boardadmin",date:"10 Sep 2024, 16:51"},
    {link:"admin",name:"प्रशासन",name_eng:"Heading 3",num:"00",num2:"200",job:"To be Written",by:"boardadmin",date:"10 Sep 2024, 16:51"},
    {link:"admin",name:"प्रशासन",name_eng:"Heading 4",num:"00",num2:"200",job:"To be Written",by:"boardadmin",date:"10 Sep 2024, 16:51"},
    {link:"admin",name:"प्रशासन",name_eng:"Heading 5",num:"00",num2:"200",job:"To be Written",by:"boardadmin",date:"10 Sep 2024, 16:51"},
    {link:"admin",name:"प्रशासन",name_eng:"Heading 6",num:"00",num2:"200",job:"To be Written",by:"boardadmin",date:"10 Sep 2024, 16:51"},
    {link:"admin",name:"प्रशासन",name_eng:"Heading 7",num:"00",num2:"200",job:"To be Written",by:"boardadmin",date:"10 Sep 2024, 16:51"}
]

function Wet_canteen() {
  return (
    <div className="pt-52">
      <div className="text-2xl font-bold ml-4">
          प्रशासन/Admin
      </div>
      <div className="mt-2 ml-4 flex">
        <div className="text-md">
          New Topic
        </div>
        <div className="ml-5 text-md">
          Search this forum
        </div>
      </div>
      <div className=" pr-2 pt-5 pl-2">
      <table className="w-full border-solid border-2 border-black">
        <tr>
        <th className="w-full">
          <td className="w-[58vw] items-start text-left pl-2">Topic</td>
          <td className="w-[8vw]">Replies</td>
          <td className="w-[8vw]">
            Views
          </td>
          <td className="pl-10">
            Last Post
          </td>
        </th>
        </tr>
        {tableContent.map((table,index)=>(
          <Link to={table.link}>
          <tr key={index} className="flex items-center border-b-2 border-solid border-black">
            <td className="ml-2 w-[5vw]">
              <img src={icon1} className="w-10 h-10"/>
            </td>
            <td className="w-[55vw] font-bold ">
              {table.name} / {table.name_eng}
            </td>
            <td className="w-[8vw]">
              {table.num}
            </td>
            <td className="w-[8vw]">
              {table.num2}
            </td>
            <td className="mt-1 mb-1">
              {/* <div className="font-bold">
                {table.job}
              </div> */}
              <div>
                <span>by</span> <span className="font-bold">{table.by}</span>
              </div>
              <div>
                {table.date}
              </div>
            </td>
          </tr>
          </Link>
        ))}  
      </table>
      </div>
    </div>
  )
}

export default Wet_canteen