import Vue from 'vue'
import AuthLogin from '@/components/auth/AuthLogin.vue'
import ManagerAvitoMenu from '@/components/manager/avito/ManagerAvitoMenu.vue'
import ManagerDashboardFooter from '@/components/manager/dashboard/ManagerDashboardFooter.vue'
import ManagerDashboardNavbar from '@/components/manager/dashboard/ManagerDashboardNavbar.vue'
import ManagerGoodsAdd from '@/components/manager/goods/ManagerGoodsAdd.vue'
import ManagerGoodsControl from '@/components/manager/goods/ManagerGoodsControl.vue'
import ManagerGoodsParameter from '@/components/manager/goods/ManagerGoodsParameter.vue'
import ManagerGoodsTable from '@/components/manager/goods/ManagerGoodsTable.vue'
import ManagerOfferShow from '@/components/manager/offer/ManagerOfferShow.vue'
import ManagerOfferTable from '@/components/manager/offer/ManagerOfferTable.vue'
import ManagerRackControl from '@/components/manager/rack/ManagerRackControl.vue'
import ManagerSidebarMenu from '@/components/manager/sidebar/ManagerSidebarMenu.vue'
import ManagerUserAdd from '@/components/manager/user/ManagerUserAdd.vue'
import ManagerUserTable from '@/components/manager/user/ManagerUserTable.vue'
import PublicCategoryItems from '@/components/public/category/PublicCategoryItems.vue'
import PublicCategoryOrderModal from '@/components/public/category/PublicCategoryOrderModal.vue'
import PublicContactManage from '@/components/public/contact/PublicContactManage.vue'
import PublicDashboardControl from '@/components/public/dashboard/PublicDashboardControl.vue'
import PublicDashboardFooter from '@/components/public/dashboard/PublicDashboardFooter.vue'
import PublicDashboardNavbar from '@/components/public/dashboard/PublicDashboardNavbar.vue'
import PublicDimensionModal from '@/components/public/dimension/PublicDimensionModal.vue'
import PublicFeedbackManage from '@/components/public/feedback/PublicFeedbackManage.vue'
import PublicJobManage from '@/components/public/job/PublicJobManage.vue'
import PublicMainFifthBlock from '@/components/public/main/PublicMainFifthBlock.vue'
import PublicMainFirstBlock from '@/components/public/main/PublicMainFirstBlock.vue'
import PublicMainFourthBlock from '@/components/public/main/PublicMainFourthBlock.vue'
import PublicMainThirdBlock from '@/components/public/main/PublicMainThirdBlock.vue'
import PublicObjectManage from '@/components/public/object/PublicObjectManage.vue'
import PublicOfferBasket from '@/components/public/offer/PublicOfferBasket.vue'
import PublicOfferConfirm from '@/components/public/offer/PublicOfferConfirm.vue'
import PublicOfferManage from '@/components/public/offer/PublicOfferManage.vue'
import PublicVacancyManage from '@/components/public/vacancy/PublicVacancyManage.vue'
import PublicWidgetCallback from '@/components/public/widget/PublicWidgetCallback.vue'
import PublicWidgetCatalog from '@/components/public/widget/PublicWidgetCatalog.vue'
import PublicWidgetGoodsCatalog from '@/components/public/widget/PublicWidgetGoodsCatalog.vue'
import PublicWidgetGoodsFilter from '@/components/public/widget/PublicWidgetGoodsFilter.vue'
import PublicWidgetGoodsPage from '@/components/public/widget/PublicWidgetGoodsPage.vue'
import PublicWidgetRackCatalog from '@/components/public/widget/PublicWidgetRackCatalog.vue'
import PublicWidgetRackCategory from '@/components/public/widget/PublicWidgetRackCategory.vue'
import PublicWidgetRackPage from '@/components/public/widget/PublicWidgetRackPage.vue'
import PublicWidgetSidebar from '@/components/public/widget/PublicWidgetSidebar.vue'
import PublicWidgetSidebarCatalog from '@/components/public/widget/PublicWidgetSidebarCatalog.vue'
import ManagerRackCategoryAdd from '@/components/manager/rack/category/ManagerRackCategoryAdd.vue'
import ManagerRackCategoryTable from '@/components/manager/rack/category/ManagerRackCategoryTable.vue'
import ManagerRackComponentAdd from '@/components/manager/rack/component/ManagerRackComponentAdd.vue'
import ManagerRackComponentTable from '@/components/manager/rack/component/ManagerRackComponentTable.vue'
import ManagerRackParameterAdd from '@/components/manager/rack/parameter/ManagerRackParameterAdd.vue'
import ManagerRackParameterTable from '@/components/manager/rack/parameter/ManagerRackParameterTable.vue'
import ManagerRackPriceAdd from '@/components/manager/rack/price/ManagerRackPriceAdd.vue'
import ManagerRackPriceTable from '@/components/manager/rack/price/ManagerRackPriceTable.vue'
import ManagerRackTypeAdd from '@/components/manager/rack/type/ManagerRackTypeAdd.vue'
import ManagerRackTypeTable from '@/components/manager/rack/type/ManagerRackTypeTable.vue'
import ManagerRackTypeComponentAdd from '@/components/manager/rack/typeComponent/ManagerRackTypeComponentAdd.vue'
import ManagerRackTypeComponentTable from '@/components/manager/rack/typeComponent/ManagerRackTypeComponentTable.vue'

Vue.component('AuthLogin', AuthLogin)
Vue.component('LazyAuthLogin', AuthLogin)
Vue.component('ManagerAvitoMenu', ManagerAvitoMenu)
Vue.component('LazyManagerAvitoMenu', ManagerAvitoMenu)
Vue.component('ManagerDashboardFooter', ManagerDashboardFooter)
Vue.component('LazyManagerDashboardFooter', ManagerDashboardFooter)
Vue.component('ManagerDashboardNavbar', ManagerDashboardNavbar)
Vue.component('LazyManagerDashboardNavbar', ManagerDashboardNavbar)
Vue.component('ManagerGoodsAdd', ManagerGoodsAdd)
Vue.component('LazyManagerGoodsAdd', ManagerGoodsAdd)
Vue.component('ManagerGoodsControl', ManagerGoodsControl)
Vue.component('LazyManagerGoodsControl', ManagerGoodsControl)
Vue.component('ManagerGoodsParameter', ManagerGoodsParameter)
Vue.component('LazyManagerGoodsParameter', ManagerGoodsParameter)
Vue.component('ManagerGoodsTable', ManagerGoodsTable)
Vue.component('LazyManagerGoodsTable', ManagerGoodsTable)
Vue.component('ManagerOfferShow', ManagerOfferShow)
Vue.component('LazyManagerOfferShow', ManagerOfferShow)
Vue.component('ManagerOfferTable', ManagerOfferTable)
Vue.component('LazyManagerOfferTable', ManagerOfferTable)
Vue.component('ManagerRackControl', ManagerRackControl)
Vue.component('LazyManagerRackControl', ManagerRackControl)
Vue.component('ManagerSidebarMenu', ManagerSidebarMenu)
Vue.component('LazyManagerSidebarMenu', ManagerSidebarMenu)
Vue.component('ManagerUserAdd', ManagerUserAdd)
Vue.component('LazyManagerUserAdd', ManagerUserAdd)
Vue.component('ManagerUserTable', ManagerUserTable)
Vue.component('LazyManagerUserTable', ManagerUserTable)
Vue.component('PublicCategoryItems', PublicCategoryItems)
Vue.component('LazyPublicCategoryItems', PublicCategoryItems)
Vue.component('PublicCategoryOrderModal', PublicCategoryOrderModal)
Vue.component('LazyPublicCategoryOrderModal', PublicCategoryOrderModal)
Vue.component('PublicContactManage', PublicContactManage)
Vue.component('LazyPublicContactManage', PublicContactManage)
Vue.component('PublicDashboardControl', PublicDashboardControl)
Vue.component('LazyPublicDashboardControl', PublicDashboardControl)
Vue.component('PublicDashboardFooter', PublicDashboardFooter)
Vue.component('LazyPublicDashboardFooter', PublicDashboardFooter)
Vue.component('PublicDashboardNavbar', PublicDashboardNavbar)
Vue.component('LazyPublicDashboardNavbar', PublicDashboardNavbar)
Vue.component('PublicDimensionModal', PublicDimensionModal)
Vue.component('LazyPublicDimensionModal', PublicDimensionModal)
Vue.component('PublicFeedbackManage', PublicFeedbackManage)
Vue.component('LazyPublicFeedbackManage', PublicFeedbackManage)
Vue.component('PublicJobManage', PublicJobManage)
Vue.component('LazyPublicJobManage', PublicJobManage)
Vue.component('PublicMainFifthBlock', PublicMainFifthBlock)
Vue.component('LazyPublicMainFifthBlock', PublicMainFifthBlock)
Vue.component('PublicMainFirstBlock', PublicMainFirstBlock)
Vue.component('LazyPublicMainFirstBlock', PublicMainFirstBlock)
Vue.component('PublicMainFourthBlock', PublicMainFourthBlock)
Vue.component('LazyPublicMainFourthBlock', PublicMainFourthBlock)
Vue.component('PublicMainThirdBlock', PublicMainThirdBlock)
Vue.component('LazyPublicMainThirdBlock', PublicMainThirdBlock)
Vue.component('PublicObjectManage', PublicObjectManage)
Vue.component('LazyPublicObjectManage', PublicObjectManage)
Vue.component('PublicOfferBasket', PublicOfferBasket)
Vue.component('LazyPublicOfferBasket', PublicOfferBasket)
Vue.component('PublicOfferConfirm', PublicOfferConfirm)
Vue.component('LazyPublicOfferConfirm', PublicOfferConfirm)
Vue.component('PublicOfferManage', PublicOfferManage)
Vue.component('LazyPublicOfferManage', PublicOfferManage)
Vue.component('PublicVacancyManage', PublicVacancyManage)
Vue.component('LazyPublicVacancyManage', PublicVacancyManage)
Vue.component('PublicWidgetCallback', PublicWidgetCallback)
Vue.component('LazyPublicWidgetCallback', PublicWidgetCallback)
Vue.component('PublicWidgetCatalog', PublicWidgetCatalog)
Vue.component('LazyPublicWidgetCatalog', PublicWidgetCatalog)
Vue.component('PublicWidgetGoodsCatalog', PublicWidgetGoodsCatalog)
Vue.component('LazyPublicWidgetGoodsCatalog', PublicWidgetGoodsCatalog)
Vue.component('PublicWidgetGoodsFilter', PublicWidgetGoodsFilter)
Vue.component('LazyPublicWidgetGoodsFilter', PublicWidgetGoodsFilter)
Vue.component('PublicWidgetGoodsPage', PublicWidgetGoodsPage)
Vue.component('LazyPublicWidgetGoodsPage', PublicWidgetGoodsPage)
Vue.component('PublicWidgetRackCatalog', PublicWidgetRackCatalog)
Vue.component('LazyPublicWidgetRackCatalog', PublicWidgetRackCatalog)
Vue.component('PublicWidgetRackCategory', PublicWidgetRackCategory)
Vue.component('LazyPublicWidgetRackCategory', PublicWidgetRackCategory)
Vue.component('PublicWidgetRackPage', PublicWidgetRackPage)
Vue.component('LazyPublicWidgetRackPage', PublicWidgetRackPage)
Vue.component('PublicWidgetSidebar', PublicWidgetSidebar)
Vue.component('LazyPublicWidgetSidebar', PublicWidgetSidebar)
Vue.component('PublicWidgetSidebarCatalog', PublicWidgetSidebarCatalog)
Vue.component('LazyPublicWidgetSidebarCatalog', PublicWidgetSidebarCatalog)
Vue.component('ManagerRackCategoryAdd', ManagerRackCategoryAdd)
Vue.component('LazyManagerRackCategoryAdd', ManagerRackCategoryAdd)
Vue.component('ManagerRackCategoryTable', ManagerRackCategoryTable)
Vue.component('LazyManagerRackCategoryTable', ManagerRackCategoryTable)
Vue.component('ManagerRackComponentAdd', ManagerRackComponentAdd)
Vue.component('LazyManagerRackComponentAdd', ManagerRackComponentAdd)
Vue.component('ManagerRackComponentTable', ManagerRackComponentTable)
Vue.component('LazyManagerRackComponentTable', ManagerRackComponentTable)
Vue.component('ManagerRackParameterAdd', ManagerRackParameterAdd)
Vue.component('LazyManagerRackParameterAdd', ManagerRackParameterAdd)
Vue.component('ManagerRackParameterTable', ManagerRackParameterTable)
Vue.component('LazyManagerRackParameterTable', ManagerRackParameterTable)
Vue.component('ManagerRackPriceAdd', ManagerRackPriceAdd)
Vue.component('LazyManagerRackPriceAdd', ManagerRackPriceAdd)
Vue.component('ManagerRackPriceTable', ManagerRackPriceTable)
Vue.component('LazyManagerRackPriceTable', ManagerRackPriceTable)
Vue.component('ManagerRackTypeAdd', ManagerRackTypeAdd)
Vue.component('LazyManagerRackTypeAdd', ManagerRackTypeAdd)
Vue.component('ManagerRackTypeTable', ManagerRackTypeTable)
Vue.component('LazyManagerRackTypeTable', ManagerRackTypeTable)
Vue.component('ManagerRackTypeComponentAdd', ManagerRackTypeComponentAdd)
Vue.component('LazyManagerRackTypeComponentAdd', ManagerRackTypeComponentAdd)
Vue.component('ManagerRackTypeComponentTable', ManagerRackTypeComponentTable)
Vue.component('LazyManagerRackTypeComponentTable', ManagerRackTypeComponentTable)
