import Header from "../components/HeadPage";
import Card from "../components/card";
export default function TV(){
    let Page = {
        Judul : "Daftar Televisi"
    }
    let TV = {
        MerkTV : "Samsung LED Curved TV 49'",
        Img : "https://cf.shopee.co.id/file/e4816df12606a724cdacdaa0032f16bf",
        HargaTV : "Rp. 6.500.000"
    }
    let TV2 = {
        MerkTV2 : "Sony LED TV 32'",
        Img2 : "https://4.bp.blogspot.com/-r2bPoV_IUQs/WItANYcMcnI/AAAAAAAAEFs/Tf2ZoU2n0nk04wDqLYUSSXx2kRz_doXlgCLcB/s1600/sekilas-harga-tv-led-sony-2.jpg",
        HargaTV2 : "Rp. 2.500.000"
    }
    let TV3 = {
        MerkTV3 : "LG LED TV 55'",
        Img3 : "https://s1.bukalapak.com/img/6283417772/large/LED_TV_LG_55_Inch_55UJ632T___55UJ632_4K_UHD_Smart_TV_USB_HDM.png",
        HargaTV3 : "Rp. 8.250.000"
    }
    
    return(
        <div>
            <Header/>
            <Card
                Judul = {Page.Judul}
                
                MerkTV = {TV.MerkTV}
                Img = {TV.Img}
                HargaTV = {TV.HargaTV}

                MerkTV2 = {TV2.MerkTV2}
                Img2 = {TV2.Img2}
                HargaTV2 = {TV2.HargaTV2}

                MerkTV3 = {TV3.MerkTV3}
                Img3 = {TV3.Img3}
                HargaTV3 = {TV3.HargaTV3}
            />
        </div>
    )
}