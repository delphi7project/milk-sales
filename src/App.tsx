import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Delivery from "./pages/Delivery";
import Recipes from "./pages/Recipes";
import News from "./pages/News";
import Contacts from "./pages/Contacts";
import Quality from "./pages/Quality";
import NotFound from "./pages/NotFound";

// Additional pages (will be created)
import Help from "./pages/Help";
import Returns from "./pages/Returns";
import Payment from "./pages/Payment";
import Loyalty from "./pages/Loyalty";
import Reviews from "./pages/Reviews";
import Promotions from "./pages/Promotions";
import Nutrition from "./pages/Nutrition";
import Sustainability from "./pages/Sustainability";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import Investors from "./pages/Investors";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Sitemap from "./pages/Sitemap";
import OrderSuccess from "./pages/OrderSuccess";
import Profile from "./pages/Profile";
import OrderHistory from "./pages/OrderHistory";
import Wishlist from "./pages/Wishlist";
import Compare from "./pages/Compare";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Wholesale from "./pages/Wholesale";
import Franchise from "./pages/Franchise";
import RecipeDetail from "./pages/RecipeDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:category" element={<Catalog />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:id" element={<RecipeDetail />} />
            <Route path="/news" element={<News />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/help" element={<Help />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/loyalty" element={<Loyalty />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/promotions" element={<Promotions />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/press" element={<Press />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/wholesale" element={<Wholesale />} />
            <Route path="/franchise" element={<Franchise />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;