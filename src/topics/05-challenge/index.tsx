// type ProfileCardProps = {
//   type: "basic" | "advanced";
//   name: string;
//   email?: string;
// };

// function Component(props: ProfileCardProps) {
//   const { type, name, email } = props;

//   const alertType = type === "basic" ? "success" : "danger";
//   const className = `alert alert-${alertType}`;

//   return (
//     <div>
//       <h2>Challenge</h2>
//       <article className={className}>
//         <h3>Username : {name}</h3>
//         {type === "advanced" ? <h2>Email : {email}</h2> : null}
//       </article>
//     </div>
//   );
// }

// export default Component;

type BasicProfileCardProps = {
  type: "basic";
  name: string;
};

type AdvancedProfileCardProps = {
  type: "advanced";
  name: string;
  email: string;
};

// make it union type |
type ProfileCardProps = BasicProfileCardProps | AdvancedProfileCardProps;

function Component(props: ProfileCardProps) {
  // these two property always there but email came when type will be advanced
  const { type, name } = props;

  if (type === "basic") {
    return (
      <article className="alert alert-success">
        <h2>User : {name}</h2>
      </article>
    );
  }

  return (
    <article className="alert alert-danger">
      <h2>User : {name}</h2>
      <h2>Email : {props.email}</h2>
    </article>
  );
}

export default Component;
