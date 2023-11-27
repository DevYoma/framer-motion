import AnimationControls from "./components/AnimationControls"
import BasicsOfMotion from "./components/BasicsOfMotion"
import Gestures from "./components/Gestures"
import ScrollBasedAnimations from "./components/ScrollBasedAnimations"
import ViewBasedAnimations from "./components/ViewBasedAnimations"

function App() {
  return (
    <div 
      style={{
        // paddingTop: "200vh" for ViewBasedAnimations
        // overflowX: "hidden"
      }}
    >
      {/* <h3>Learning React Framer Motion 🚀</h3> */}
      {/* <BasicsOfMotion /> */}
      {/* <Gestures /> */}
      {/* <AnimationControls /> */}
      {/* <ViewBasedAnimations /> */}
      <ScrollBasedAnimations />
    </div>
  )
}

export default App
