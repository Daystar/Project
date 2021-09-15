export const animationOne = {

        in:{
            opacity:1
        },
        out:{
            opacity:0 
        }



};

export const animationTwo = {

        in:{
            opacity:1,
            y:0,
            scale:1
        },
        out:{
            opacity:0,
            y:"100%",
            scale:0.3

        }



};




export const transitionOne ={

    duration: 0.6

};
export const transitionTwo ={

        duration:0.8,
    
};
export const transitionThree ={

    //    duration:'100ms',
      type: "spring",
     stiffness: 75,
      restDelta:2,
      mass:0.5
};