import ComponentB from "./ComponentB";

function ComponentA({abdo}){
    return (
        <div>
      <ComponentB abdo={abdo}/>
    </div>
    );
}
export default ComponentA;  