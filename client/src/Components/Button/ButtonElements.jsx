import Button from "./Button.jsx";

export const ButtonElements = [
    {
    id: "primary-btn",
    label: "buttons",
    type: "buttons",
    component:Button ,
    defaultProps: {
      label:"Primary Button",
      className: "btn btn-primary w-[6vw]",
    },
    preview: (
      <button className="btn btn-primary w-[6vw]">Primary</button>
    ),
    isContainer: false,
    children: []
  },

  {
    id: "success-btn",
    label: "buttons",
    type: "buttons",
    component:Button ,
    defaultProps: {
      label:"Success Button",
      className: "btn btn-success w-[6vw]",
    },
    preview: (
      <button className="btn btn-success w-[6vw]">Success</button>
    ),
    isContainer: false,
    children: []
  },

  {
    id: "warning-btn",
    label: "buttons",
    type: "buttons",
    component:Button ,
    defaultProps: {
      label:"Warning Button",
      className: "btn btn-warning w-[6vw]",
    },
    preview: (
      <button className="btn btn-warning w-[6vw]">Warning</button>
    ),
    isContainer: false,
    children: []
  },

  {
    id: "error-btn",
    label: "buttons",
    type: "buttons",
    component:Button ,
    defaultProps: {
      label:"Error Button",
      className: "btn btn-error w-[6vw]",
    },
    preview: (
      <button className="btn btn-error w-[6vw]">Error</button>
    ),
    isContainer: false,
    children: []
  },

]