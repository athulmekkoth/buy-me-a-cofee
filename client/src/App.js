import {useState,useEffect} from "react"
import { ethers } from "ethers"
//abi from artificats
import abi from "./contract/abc.json"
import Buy from "./components/Buy"
import Memos from "./components/Memos"
import img from "../src/buy.png"
export default function App()
{
 
    const [state,setstate]=useState({
      provider:null,
      signer:null,
      contract:null
    })
    useEffect(()=>{
      const connectwalet=async()=>{
      const  contractadress= "0xd3156bda99f8a220695ec825d09ce4d97582a00b";
      const contractabi=abi.abi;
    const { ethereum } = window;
      
        if(ethereum){
        try{
          const account=await ethereum.request({method:"eth_requestAccounts"})
        window.ethereum.on("chainChamned",()=>{
          window.location.reload();
        })
        window.ethereum.on("accountChamged",()=>{
          window.location.reload();
        })

        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner()
        const contract=new ethers.Contract(contractadress,contractabi,signer);
        setstate({provider,signer,contract})
      }
      catch(err)
      {
        console.log(err)     
       }
      }
    
    }
      connectwalet();
    },[])
    console.log(state)
      return(
   
    <div className="">
   <div>
    <img  className="w-[100%]" src={img}  alt="buy"/>
   </div>
   <Buy state={state} />
    <Memos state={state} />
      </div>
  )
}