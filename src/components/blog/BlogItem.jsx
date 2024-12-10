function BlogItem({ blog }) {
  const { title, image } = blog;

  // Manually define expanded descriptions based on the title of each blog
  let description = '';
  switch (title) {
    case "10 Reasons To Do A Digital Detox Challenge":
      description = "Taking a break from digital devices can enhance your mental health, increase productivity, and help you reconnect with the real world. It allows you to refocus your energy on real-life experiences. You’ll feel less stressed and more grounded. Embracing this challenge can improve your relationships and increase mindfulness. Whether for a day or a week, the benefits of a digital detox are undeniable, promoting better emotional well-being and a clearer mind.";
      break;
    case "The Ultimate Hangover Burger: Egg in a Hole Burger Grilled Cheese":
      description = "This burger combines the indulgent flavors of grilled cheese and a hangover-curing egg in a hole, perfect for a morning pick-me-up. The crispy texture of the grilled cheese complements the softness of the egg. It’s not only a delicious meal but also a fun twist on a traditional comfort food. Packed with protein and flavor, this burger is the ideal remedy for any tough morning. The blend of egg, cheese, and crispy bread will leave you feeling revitalized and satisfied.";
      break;
    case "Traditional Soft Pretzels with Sweet Beer Cheese":
      description = "Learn how to make the perfect soft pretzels paired with a deliciously creamy sweet beer cheese for dipping. These pretzels have a rich, golden brown exterior and a soft, chewy interior. The beer cheese adds a savory depth to the sweet pretzel flavor. Perfect for any party or casual snack, they’re guaranteed to be a crowd-pleaser. This recipe brings a warm, comforting taste that’s hard to resist and easy to share with friends and family.";
      break;
    case "My Favorite Easy Black Pizza Toast Recipe":
      description = "A quick and easy recipe for pizza toast with black olives and mozzarella cheese, perfect for any snack or dinner. This dish is ideal for busy evenings when you crave something simple but satisfying. The black olives add a briny, savory kick to the melted cheese and crispy bread. Customize it with your favorite toppings for a personalized treat. Ready in under 15 minutes, it’s a great way to enjoy pizza flavors without the hassle of making a full pizza.";
      break;
    case "6 Ingredient Vegan Cinnamon Rolls":
      description = "These easy-to-make cinnamon rolls require only 6 ingredients, perfect for a quick vegan breakfast or dessert. The dough is soft, fluffy, and perfectly sweet, making it irresistible. You’ll love the gooey cinnamon sugar filling that adds richness to every bite. This simple recipe is a great way to treat yourself without the need for complex ingredients. Best served warm, these rolls will melt in your mouth and leave you craving more.";
      break;
    case "Crispy Stovetop Roasted Red Potatoes":
      description = "A simple yet delicious recipe for crispy roasted red potatoes, made on the stovetop for a quick side dish. These potatoes have a perfectly crispy exterior and tender inside, bursting with flavor. With just a few seasonings, you’ll create a mouthwatering dish that pairs well with any main course. Perfect for a weeknight dinner or a lazy weekend meal. These stovetop potatoes are a great alternative to oven-roasted potatoes when you’re short on time.";
      break;
    case "Easy 4 Ingredient Hatch Salsa Verde":
      description = "This salsa verde is made with just 4 ingredients but packs a punch of flavor, perfect for dipping or topping your tacos. The smoky roasted hatch chiles give this salsa a unique and rich flavor. The tangy lime juice and the freshness of cilantro balance out the heat, making it a versatile addition to many dishes. Simple yet delicious, this salsa verde can be made in minutes and is perfect for any Mexican-inspired meal.";
      break;
    case "Totoro Pancake Tutorial: Easy Totoro Pancake Food Art":
      description = "Learn how to make adorable Totoro pancakes using simple ingredients and easy-to-follow steps. This fun food art is perfect for kids or anyone who loves creative cooking. You’ll be amazed at how simple it is to create a cute Totoro face with pancakes. With just a few basic ingredients, you can turn your breakfast into a whimsical masterpiece. This tutorial will show you how to make each detail pop, from the eyes to the little Totoro ears.";
      break;
    case "How to Make Jammy Soft Boiled Eggs at Home":
      description = "Master the art of making jammy soft boiled eggs with this easy step-by-step guide, perfect for breakfast or salads. The egg whites are set perfectly, while the yolks remain rich and creamy. These eggs are a great addition to toast, ramen, or even grain bowls. Once you get the timing right, these eggs will become your go-to breakfast. The perfect balance of soft and firm, with a delicious runny yolk, makes them the ideal comfort food.";
      break;
    case "Traditional Soft Pretzels with Sweet Beer Cheese":
      description = "A repeat favorite, these soft pretzels come with a creamy, sweet beer cheese that makes them extra special. The dough is soft yet chewy, with the perfect golden crust on the outside. The beer cheese dip adds a delightful sweetness that pairs perfectly with the saltiness of the pretzels. This recipe is perfect for a cozy movie night or a fun snack for guests. You’ll love the combination of warm, freshly baked pretzels with the indulgent cheese dip.";
      break;
    default:
      description = "No description available for this post.";
  }

  return (
    <div className="rounded-xl border border-lightGray">
      <img
        src={image}
        alt={title}
        className="w-full rounded-t-xl object-cover"
      />
      <div className="p-[20px]">
        <h2 className="cursor-pointer text-2xl font-bold hover:text-darkYellow sm:text-4xl">
          {title}
        </h2>
        {/* Increased description size and more lines */}
        <p className="my-[10px] text-lightGray text-lg sm:text-xl">
          {description}
        </p>
      </div>
    </div>
  );
}

export default BlogItem;
