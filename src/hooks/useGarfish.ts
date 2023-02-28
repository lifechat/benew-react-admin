import  Garfish  from "garfish";




export default () => {
    Garfish.run({
        basename: '/',
        domGetter: '#micro',
        apps: [
            {
                name: 'ntt-sap1',
                activeWhen: '/ntt-sap1',
                entry: 'http://127.0.0.1:3000/fh5',
            },
            {
                name: 'ntt-sap2',
                activeWhen: '/ntt-sap2',
                entry: 'http://127.0.0.1:3000/fh5',
            },
        ],
    })
    
    // Garfish.registerApp('',{

    // })


    // 清除逃逸沙箱的变量
    Garfish.clearEscapeEffect('')


    // Garfish.setGlobalValue( );
}