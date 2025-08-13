import React from 'react'
import Cards from '../components/Cards';

const Services = () => {


  return (
    <div className='mb-16'>
      <h1 className='text-center font-extrabold text-3xl mt-4 mb-16'>My Services</h1>
      <div className='justify-items-center grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-x-64 xl:grid-cols-3 xl:mt-24 lg:mx-62 xl:mx-62 hope'>
        <Cards
        num='01'
        title='Web Design' 
        desc='I craft visually stunning and intuitive website designs that captivate your audience and elevate your brand.'
        fullDesc="I craft visually stunning and intuitive website designs that captivate your audience and elevate your brand. My focus is on creating a seamless user experience (UX) and a beautiful user interface (UI) that is not only easy to navigate but also drives engagement. I'll work with you to create a professional design that looks great, feels natural to use, and effectively communicates your message."
        />
        <Cards
        num='02'
        title='Web Development' 
        desc='I build functional, robust, and responsive websites that bring your design vision to life.'
        fullDesc='I build functional, robust, and responsive websites that bring your design vision to life. As a web developer, I specialize in both front-end and back-end technologies, ensuring your site is fast, secure, and performs flawlessly. Whether you need a simple static site, an e-commerce platform, or a complex web application, I write clean and efficient code to deliver a high-quality product that meets your specific needs.'
        />
        <Cards
        num='03'
        title='Software Development'
        desc='I provide comprehensive software development services to build custom digital solutions for your business. '
        fullDesc='I provide comprehensive software development services to build custom digital solutions for your business. From initial concept to a final, polished product, I create reliable and scalable applications—including web apps, mobile apps, and specialized software. I manage the entire development lifecycle, delivering a custom-built solution that is tailored to your requirements and designed to help you achieve your goals.'
        />
        {/* <Cards
        num='04'
        title='Web Design' 
        desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati deserunt reprehenderit quas animi ratione? Perferendis, sint expedita exercitationem aut quasi voluptatum optio ullam natus tempore cupiditate nesciunt iure vitae ea molestias saepe asperiores autem. '
        fullDesc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque placeat aspernatur similique soluta culpa quasi molestiae. Impedit corrupti est itaque voluptatum blanditiis, deserunt praesentium ipsum vel tenetur quod, iure, numquam atque! Praesentium eos, numquam molestias quos nesciunt magni, laudantium autem culpa recusandae quasi obcaecati ut, quo sint quibusdam id doloribus velit! Reiciendis accusantium rem quasi nisi repellat nemo, recusandae vitae voluptates magnam laudantium iusto, esse in deleniti sequi culpa nesciunt aliquid provident sunt laborum! Beatae provident magnam temporibus, ea fugit illo omnis soluta optio, repellendus eligendi dolorem necessitatibus quia reprehenderit, minus nulla eius modi itaque nostrum magni ipsum tempore eaque?'
        />
        <Cards
        num='05'
        title='Web Design' 
        desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati deserunt reprehenderit quas animi ratione? Perferendis, sint expedita exercitationem aut quasi voluptatum optio ullam natus tempore cupiditate nesciunt iure vitae ea molestias saepe asperiores autem. '
        fullDesc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque placeat aspernatur similique soluta culpa quasi molestiae. Impedit corrupti est itaque voluptatum blanditiis, deserunt praesentium ipsum vel tenetur quod, iure, numquam atque! Praesentium eos, numquam molestias quos nesciunt magni, laudantium autem culpa recusandae quasi obcaecati ut, quo sint quibusdam id doloribus velit! Reiciendis accusantium rem quasi nisi repellat nemo, recusandae vitae voluptates magnam laudantium iusto, esse in deleniti sequi culpa nesciunt aliquid provident sunt laborum! Beatae provident magnam temporibus, ea fugit illo omnis soluta optio, repellendus eligendi dolorem necessitatibus quia reprehenderit, minus nulla eius modi itaque nostrum magni ipsum tempore eaque?'
        />
        <Cards
        num='06'
        title='Web Design' 
        desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati deserunt reprehenderit quas animi ratione? Perferendis, sint expedita exercitationem aut quasi voluptatum optio ullam natus tempore cupiditate nesciunt iure vitae ea molestias saepe asperiores autem. '
        fullDesc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque placeat aspernatur similique soluta culpa quasi molestiae. Impedit corrupti est itaque voluptatum blanditiis, deserunt praesentium ipsum vel tenetur quod, iure, numquam atque! Praesentium eos, numquam molestias quos nesciunt magni, laudantium autem culpa recusandae quasi obcaecati ut, quo sint quibusdam id doloribus velit! Reiciendis accusantium rem quasi nisi repellat nemo, recusandae vitae voluptates magnam laudantium iusto, esse in deleniti sequi culpa nesciunt aliquid provident sunt laborum! Beatae provident magnam temporibus, ea fugit illo omnis soluta optio, repellendus eligendi dolorem necessitatibus quia reprehenderit, minus nulla eius modi itaque nostrum magni ipsum tempore eaque?'
        /> */}
      </div>
    </div>
  )
}

export default Services;