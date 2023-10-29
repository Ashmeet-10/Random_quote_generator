import Quote from "@/components/Quote"
import getRandomQuote from "@/lib/getRandomQuote"

const Home = async() => {
  const randomQuote = await getRandomQuote()
  console.log('Author:', randomQuote.author)
  console.log('Category:', randomQuote.category)
  console.log('Quote:', randomQuote.quote)
  return <Quote {...randomQuote} />
}

export default Home