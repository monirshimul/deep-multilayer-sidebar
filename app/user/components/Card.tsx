type Props = {};

const Card = (props: Props) => {
  return (
    <div class="bg-lightBlue rounded overflow-hidden shadow-md">
      <img
        class="w-full h-48 object-cover"
        src="path/to/your/image.jpg"
        alt="Product Image"
      />
      <div class="px-6 py-4">
        <h3 class="text-xl font-bold text-gray-800">Headline Text</h3>
        <ul class="list-disc pl-4 mt-2 space-y-2">
          <li class="text-gray-700">Feature 1</li>
          <li class="text-gray-700">Feature 2</li>
          <li class="text-gray-700">Feature 3</li>
        </ul>
        <a
          href="#"
          class="inline-flex items-center px-4 py-2 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-700"
        >
          Learn More
        </a>
      </div>
      <div class="px-6 py-2 flex items-center justify-end">
        <span class="text-orange-500 mr-1">&#9733;</span>
        <span class="text-orange-500 mr-1">&#9733;</span>
        <span class="text-orange-500 mr-1">&#9733;</span>
        <span class="text-orange-500 mr-1">&#9733;</span>
        <span class="text-gray-400">&#9734;</span>
      </div>
    </div>
  );
};

export default Card;
