import Link from 'next/link';

export let details = [
  { id: 1, name: 'Yash', role: 'Senior Developer' },
  { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
  { id: 3, name: 'Suresh', role: 'Frontend Developer' }
];

const AboutUs = () => {
  return (
    <ul>
      {details.map(item => (
        <li key={item.id} style={{ listStyle: 'none', margin: '10px' }}>
          <Link href={`/aboutus/${item.id}`}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default AboutUs;
