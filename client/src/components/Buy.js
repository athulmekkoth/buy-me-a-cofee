const ethers = require("ethers");
export default function Buy({state})
{
    
    const buy=async(e)=>{
        console.log("Buy component rendered");
      e.preventDefault()
        const {contract}=state
        const name=document.querySelector("#name").value;
        const message=document.querySelector("#msg").value;
        console.log(name,message,contract)
        const amount = { value: ethers.utils.parseEther("0.001") };
    const transaction = await contract.buychai(name, message, amount);
    await transaction.wait();
    console.log("Transaction is done");
    
    } 
    return(
        <div className=" bg-yellow-500 h-14 flex flex-row ">
       <form onSubmit={buy} className="flex mx-auto flex-row items-center">
        <label>Name</label>
        <input className="w-[30%] mx-3 rounded-xl" type="text" id="name" placeholder="enter name" />
        <label>Message</label>
   
       <input  className="mx-3 rounded-xl w-[30%]" type="text" id="msg" placeholder="enter message" />
       <button className="bg-yellow-900 rounded-xl w-12"  type="submit">Pay</button>
       </form>
       
       </div>
    )
}
/*

const Buy = ({ state }) => {
  const buyChai = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    console.log(name, message, contract);
    const amount = { value: ethers.utils.parseEther("0.001") };
    const transaction = await contract.buychai(name, message, amount);
    await transaction.wait();
    console.log("Transaction is done");
  };
  return (
    <>
      <div className="container-md" style={{ width: "50%", marginTop: "25px" }}>
        <form onSubmit={buyChai}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <input
              type="text"
              className="form-control"
              id="message"
              placeholder="Enter Your Message"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!state.contract}
          >
            Pay
          </button>
        </form>
      </div>
    </>
  );
};
export default Buy;*/