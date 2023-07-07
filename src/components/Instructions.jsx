export default function Instructions({ instractions }) {
    const newInst = instractions.split('.')
    return (
        <div className="mt-5">
            <h3 className="text-lg font-semibold">Instructions:</h3>
            {newInst.map((inst,index) => <p key={index}>-{inst}</p>)}
        </div>
    );
}
