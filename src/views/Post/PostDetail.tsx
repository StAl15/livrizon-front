import {PostDetailContent} from "../../components/layouts/Post/PostDetail/PostDetailContent";
import {CardAuthor} from "../../components/layouts/Post/PostDetail/CardAuthor";

export const PostDetail: React.FC<{  }> = props => {
    const post = {
        author : {
            name: 'Иван сусалов',
            avatar: 'https://lh5.googleusercontent.com/proxy/VcczQb0hs1ksKzEAq4Iy3VdBGKZTPV3Gx7rAYtxexElvn5R2PRBugitxKgUB7SbImt4jg94ShlAzV9Rj5tqTRPhJj7T_qDLd5w=s0-d',
            commonSubs: 30,
            bio: 'Java, Kotlin, Python, C++ разработчик. Дизайнер мобильных приложений',
            isVerified: true
        },
        date: 'вчера в 21:36',
        text: 'В Нью-Йорке есть тысячи возможностей весело провести время.\n' +
            '\n' +
            'Там можно покататься на канатной дороге прямо над городом, сходить на бродвейский мюзикл, посмотреть на скелет тираннозавра или подняться на корону статуи Свободы.\n' +
            '\n' +
            'Все районы Нью-Йорка колоритные и не похожи друг на друга. В Чайна-тауне живут приезжие из Азии, а на Брайтон-Бич — из России. В Гарлеме слушают джаз, а в Сохо ходят в модные галереи и кафе. После поездки в Нью-Йорк есть ощущение, будто побывал в нескольких странах сразу.',
        images: [
            'https://avatars.mds.yandex.net/i?id=1ecfa9d85aca02f1c0ec09743cb9670b-4769521-images-thumbs&n=13',
            'https://avatars.mds.yandex.net/i?id=01d1d3712df61846f42e227b7a0f9278_sr-5679437-images-thumbs&n=13',
            'https://avatars.mds.yandex.net/i?id=96e7f22eda1dbd1078bbbfb8c3a828d3cfe5df8b-8186614-images-thumbs&n=13',
            'https://avatars.mds.yandex.net/i?id=d12be18fc8dcf0616dab1fd5c0a6a56f-5869592-images-thumbs&n=13',
            'https://avatars.mds.yandex.net/i?id=74e78e037949aad47c26e1f8ee74689d3f3637b4-8186552-images-thumbs&n=13',
            'https://informing.ru/uploads/posts/poster/1610455809_ssha.jpg',
            'https://www.westernunion.com/blog/wp-content/uploads/2016/06/Travel_Spotlight_USA_02.jpg',
            'https://freski-fotooboi.ru/images/catalog/6454868.jpg',
            'https://smartholidayslimited.com/wp-content/uploads/2020/12/USA-scaled.jpg'
        ]
    }
    return (
        <>
            <div className='bg-secondary w-screen h-full min-h-screen flex'>
                <div className={'mx-auto flex'}>
                    <PostDetailContent postDetail={post}/>
                    <CardAuthor author={post.author} />
                </div>

            </div>

        </>
    );
};