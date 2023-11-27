import { useScroll, motion, useSpring, useTransform } from 'framer-motion';

const ScrollBasedAnimations = () => {

    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress);

    const background = useTransform(scrollYProgress, [0, 1], ["rgb(86, 1, 245)", "rgb(1, 245, 13)"])

  return (
    <div>

        <motion.div 
            style={{
                // scaleX: scrollYProgress,
                scaleX,
                // background: "blue", 
                background,
                transformOrigin: "left", 
                position: "sticky", 
                top:"0", 
                width: "100%", 
                height: "20px"
            }}
        />

        <div
            style={{
                marginTop: "4rem",
                maxWidth: "700px", 
                margin: "auto", 
                padding: "1.2rem", 
                // border: "1px solid red"
            }}
        >
            <p style={{
                marginBottom: "1rem"
            }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas cupiditate odio fugiat vero dolorum rem unde accusamus consequuntur sit, quasi corrupti repudiandae totam! In facilis dolore porro nisi id omnis iure commodi eos? Explicabo, perspiciatis temporibus. Neque porro, aliquid expedita distinctio omnis, odit laudantium quidem, assumenda officiis cum repellat tempore necessitatibus. Praesentium corporis eaque vel recusandae quam quidem sed quasi neque itaque. Libero voluptatibus error nisi officia velit, esse beatae nulla dignissimos sint dolores nostrum voluptatum enim sed rerum quidem quibusdam totam, obcaecati a reiciendis, aut qui! Culpa, et quia! Similique, magnam, doloremque dolorem neque at facere autem nam sint nostrum dignissimos magni. Cupiditate voluptatibus eligendi, earum architecto, necessitatibus recusandae ratione culpa ducimus dolore pariatur praesentium ipsam? Ex reprehenderit ea minima officia magni deserunt asperiores impedit tempore voluptatum dolorem eos temporibus, eum non amet accusamus porro? Fuga vitae, officiis quidem distinctio labore quae molestiae deserunt illum corporis autem. Hic, necessitatibus.</p>

            <p style={{
                marginBottom: "1rem"
            }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas cupiditate odio fugiat vero dolorum rem unde accusamus consequuntur sit, quasi corrupti repudiandae totam! In facilis dolore porro nisi id omnis iure commodi eos? Explicabo, perspiciatis temporibus. Neque porro, aliquid expedita distinctio omnis, odit laudantium quidem, assumenda officiis cum repellat tempore necessitatibus. Praesentium corporis eaque vel recusandae quam quidem sed quasi neque itaque. Libero voluptatibus error nisi officia velit, esse beatae nulla dignissimos sint dolores nostrum voluptatum enim sed rerum quidem quibusdam totam, obcaecati a reiciendis, aut qui! Culpa, et quia! Similique, magnam, doloremque dolorem neque at facere autem nam sint nostrum dignissimos magni. Cupiditate voluptatibus eligendi, earum architecto, necessitatibus recusandae ratione culpa ducimus dolore pariatur praesentium ipsam? Ex reprehenderit ea minima officia magni deserunt asperiores impedit tempore voluptatum dolorem eos temporibus, eum non amet accusamus porro? Fuga vitae, officiis quidem distinctio labore quae molestiae deserunt illum corporis autem. Hic, necessitatibus.</p>

            <p style={{
                marginBottom: "1rem"
            }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas cupiditate odio fugiat vero dolorum rem unde accusamus consequuntur sit, quasi corrupti repudiandae totam! In facilis dolore porro nisi id omnis iure commodi eos? Explicabo, perspiciatis temporibus. Neque porro, aliquid expedita distinctio omnis, odit laudantium quidem, assumenda officiis cum repellat tempore necessitatibus. Praesentium corporis eaque vel recusandae quam quidem sed quasi neque itaque. Libero voluptatibus error nisi officia velit, esse beatae nulla dignissimos sint dolores nostrum voluptatum enim sed rerum quidem quibusdam totam, obcaecati a reiciendis, aut qui! Culpa, et quia! Similique, magnam, doloremque dolorem neque at facere autem nam sint nostrum dignissimos magni. Cupiditate voluptatibus eligendi, earum architecto, necessitatibus recusandae ratione culpa ducimus dolore pariatur praesentium ipsam? Ex reprehenderit ea minima officia magni deserunt asperiores impedit tempore voluptatum dolorem eos temporibus, eum non amet accusamus porro? Fuga vitae, officiis quidem distinctio labore quae molestiae deserunt illum corporis autem. Hic, necessitatibus.</p>

            <p style={{
                marginBottom: "1rem"
            }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas cupiditate odio fugiat vero dolorum rem unde accusamus consequuntur sit, quasi corrupti repudiandae totam! In facilis dolore porro nisi id omnis iure commodi eos? Explicabo, perspiciatis temporibus. Neque porro, aliquid expedita distinctio omnis, odit laudantium quidem, assumenda officiis cum repellat tempore necessitatibus. Praesentium corporis eaque vel recusandae quam quidem sed quasi neque itaque. Libero voluptatibus error nisi officia velit, esse beatae nulla dignissimos sint dolores nostrum voluptatum enim sed rerum quidem quibusdam totam, obcaecati a reiciendis, aut qui! Culpa, et quia! Similique, magnam, doloremque dolorem neque at facere autem nam sint nostrum dignissimos magni. Cupiditate voluptatibus eligendi, earum architecto, necessitatibus recusandae ratione culpa ducimus dolore pariatur praesentium ipsam? Ex reprehenderit ea minima officia magni deserunt asperiores impedit tempore voluptatum dolorem eos temporibus, eum non amet accusamus porro? Fuga vitae, officiis quidem distinctio labore quae molestiae deserunt illum corporis autem. Hic, necessitatibus.</p>

            <p style={{
                marginBottom: "1rem"
            }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas cupiditate odio fugiat vero dolorum rem unde accusamus consequuntur sit, quasi corrupti repudiandae totam! In facilis dolore porro nisi id omnis iure commodi eos? Explicabo, perspiciatis temporibus. Neque porro, aliquid expedita distinctio omnis, odit laudantium quidem, assumenda officiis cum repellat tempore necessitatibus. Praesentium corporis eaque vel recusandae quam quidem sed quasi neque itaque. Libero voluptatibus error nisi officia velit, esse beatae nulla dignissimos sint dolores nostrum voluptatum enim sed rerum quidem quibusdam totam, obcaecati a reiciendis, aut qui! Culpa, et quia! Similique, magnam, doloremque dolorem neque at facere autem nam sint nostrum dignissimos magni. Cupiditate voluptatibus eligendi, earum architecto, necessitatibus recusandae ratione culpa ducimus dolore pariatur praesentium ipsam? Ex reprehenderit ea minima officia magni deserunt asperiores impedit tempore voluptatum dolorem eos temporibus, eum non amet accusamus porro? Fuga vitae, officiis quidem distinctio labore quae molestiae deserunt illum corporis autem. Hic, necessitatibus.</p>
        </div>
    </div>
  )
}

export default ScrollBasedAnimations