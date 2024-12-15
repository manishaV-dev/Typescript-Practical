type ProfileCardProps = {
  type: "basic" | "advanced";
  name: string;
  email?: string;
};

function Component(props: ProfileCardProps) {
  const { type, name, email } = props;

  const alertType = type === "basic" ? "success" : "danger";
  const className = `alert alert-${alertType}`;

  return (
    <div>
      <h2>Challenge</h2>
      <article className={className}>
        <h3>Username : {name}</h3>
        {type === "advanced" ? <h2>Email : {email}</h2> : null}
      </article>
    </div>
  );
}

export default Component;
