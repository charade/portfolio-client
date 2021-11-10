
interface ItemStyle {
    top : string;
    left ?: string;
    right ?:string
};

export type AboutCategoryProperties = {
    label : string,
    style : ItemStyle
};

export const aboutCategories = [
    {
        label : 'story',
        style: {
            top : '25.5%',
            left : '91.3%'
        }
    },
     {
         label : 'hard skills',
        style : {
            top : '78.5%',
            left : '83.6%',
        }
    },
    {
        label : 'soft skills',
        style : {
            flexDirection : 'column',
            top : '89.5%',
            left : '20%' ,
        }
    },
]