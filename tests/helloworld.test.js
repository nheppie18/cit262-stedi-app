import hello from "../utils/helloworld.js";

it("Should say Nate",()=>{
    const helloString=hello();
    console.log(helloString);

    expect(helloString).toBe("Nate");
})