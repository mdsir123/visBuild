import Button from "./Button.jsx";

export const buttons=[
    {
    id: "primary-btn",
    label: "buttons",
    type: "buttons",
    component:Button ,
    defaultProps: {
      label:"Primary",
      className: "btn btn-primary w-[6vw]",
    },
    preview: (
      <button className="btn btn-primary w-[6vw]">Primary</button>
    ),
  },

  {
    id: "success-btn",
    label: "buttons",
    type: "buttons",
    component:Button ,
    defaultProps: {
      label:"Success",
      className: "btn btn-success w-[6vw]",
    },
    preview: (
      <button className="btn btn-success w-[6vw]">Success</button>
    ),
  },

  {
    id: "warning-btn",
    label: "buttons",
    type: "buttons",
    component:Button ,
    defaultProps: {
      label:"Warning",
      className: "btn btn-warning w-[6vw]",
    },
    preview: (
      <button className="btn btn-warning w-[6vw]">Warning</button>
    ),
  },

  {
    id: "error-btn",
    label: "buttons",
    type: "buttons",
    component:Button ,
    defaultProps: {
      label:"Error",
      className: "btn btn-error w-[6vw]",
    },
    preview: (
      <button className="btn btn-error w-[6vw]">Error</button>
    ),
  },

]