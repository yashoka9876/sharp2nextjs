// pages/aboutus/[developerId].js

const UserDetails = ({ user }) => {
  if (!user) {
    return <p>Developer doesn't exist</p>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.role}</p>
    </div>
  );
};

export async function getStaticPaths() {
  const details = [
    { id: 1, name: 'Yash', role: 'Senior Developer' },
    { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
    { id: 3, name: 'Suresh', role: 'Frontend Developer' }
  ];

  // Generate the paths based on the details array
  const paths = details.map(user => ({
    params: { developerId: user.id.toString() }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const details = [
    { id: 1, name: 'Yash', role: 'Senior Developer' },
    { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
    { id: 3, name: 'Suresh', role: 'Frontend Developer' }
  ];

  // Find the user details based on the developerId parameter
  const user = details.find(user => user.id === parseInt(params.developerId));

  return {
    props: { user }
  };
}

export default UserDetails;
