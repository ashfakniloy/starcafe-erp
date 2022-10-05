import { useState, useId } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import useMeasure from "react-use-measure";

function Tabs({ tabsData }) {
  const [toggleState, setToggleState] = useState(0);
  const uId = useId();
  const oId = useId();
  const [ref, { height }] = useMeasure();

  return (
    <>
      <div className="flex">
        {tabsData.map((tab, i) => (
          <div key={i} className="relative bg-slate-100">
            {toggleState === i && (
              <motion.div
                layoutId={uId}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute rounded -top-1 left-0 right-0 border-t-4 border-indigo-600 "
              ></motion.div>
            )}
            <h4
              className={`text-xl font-semibold px-3 py-2 ${
                toggleState === i
                  ? "bg-white cursor-default"
                  : // : "bg-slate-100 opacity-50 cursor-pointer"
                    "cursor-pointer opacity-50"
              }`}
              onClick={() => setToggleState(i)}
            >
              {tab.label}
            </h4>
          </div>
        ))}
      </div>

      <motion.div
        // key={toggleState}
        // initial={{ height: 0 }}
        // initial={{ height }}
        animate={{ height }}
        transition={{ duration: 0.3, delay: 0.01, ease: "easeOut" }}
        // transition={{ duration: 0.3, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <motion.div
          key={toggleState}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className=""
        >
          <div className="pt-10" ref={ref}>
            {tabsData[toggleState].content}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Tabs;
