
export default function SignUpPage({ params }: { params: { slug?: string[] } }) {
    return <h1>Sign Up {params.slug?.join("/")}</h1>;
  }