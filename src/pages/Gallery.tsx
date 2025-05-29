
import { useState, useEffect } from 'react';
import { Calendar, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import Navigation from '@/components/Navigation';
import LightboxGallery from '@/components/LightboxGallery';
import { scrollToTop } from '@/utils/scrollToTop';

interface GalleryImage {
  id: string;
  image: string;
  title: string;
}

interface MonthData {
  month: number;
  monthName: string;
  images: GalleryImage[];
}

interface YearData {
  year: number;
  months: MonthData[];
}

interface LightboxImage {
  id: string;
  image: string;
  title: string;
  date: string;
}

const Gallery = () => {
  const [openYears, setOpenYears] = useState<number[]>([]);
  const [selectedImage, setSelectedImage] = useState<number>(-1);
  const [selectedImages, setSelectedImages] = useState<LightboxImage[]>([]);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    scrollToTop();
  }, []);

  // Restructured gallery data by year and month
  const galleryData: YearData[] = [
    {
      year: 2024,
      months: [
        {
          month: 8,
          monthName: 'August',
          images: [
            {
              id: '1',
              image: '/lovable-uploads/3c4d7105-4957-413f-afe9-d3803057dd4d.png',
              title: 'F.O.T.U Summer Edition',
            }
          ]
        },
        {
          month: 6,
          monthName: 'June',
          images: [
            {
              id: '2',
              image: '/lovable-uploads/5b229133-3069-4d1e-968b-02f2dce6df72.png',
              title: 'Crowd Energy',
            }
          ]
        },
        {
          month: 3,
          monthName: 'March',
          images: [
            {
              id: '3',
              image: '/lovable-uploads/c44b8635-f9e8-4729-bc63-dfaadcfd0e0c.png',
              title: 'DJ Performance',
            }
          ]
        }
      ]
    },
    {
      year: 2023,
      months: [
        {
          month: 12,
          monthName: 'December',
          images: [
            {
              id: '4',
              image: '/lovable-uploads/f0023067-1732-4a5b-9016-a7b3d00e94e1.png',
              title: 'Artist Collaboration',
            }
          ]
        },
        {
          month: 9,
          monthName: 'September',
          images: [
            {
              id: '5',
              image: '/lovable-uploads/60d06c75-3c99-40fa-b0d7-dfa7a7abdd14.png',
              title: 'Behind the Decks',
            }
          ]
        },
        {
          month: 7,
          monthName: 'July',
          images: [
            {
              id: '6',
              image: '/lovable-uploads/6ba36210-1e45-4de8-9047-aff722cb01e0.png',
              title: 'VIP Experience',
            }
          ]
        }
      ]
    }
  ];

  // Auto-open all years on mount
  useEffect(() => {
    const years = galleryData.map(yearData => yearData.year);
    setOpenYears(years);
  }, []);

  const toggleYear = (year: number) => {
    setOpenYears(prev => 
      prev.includes(year) 
        ? prev.filter(y => y !== year)
        : [...prev, year]
    );
  };

  const openLightbox = (yearData: YearData, monthData: MonthData, clickedImage: GalleryImage) => {
    // Convert images to lightbox format with proper date strings
    const lightboxImages: LightboxImage[] = monthData.images.map(img => ({
      id: img.id,
      image: img.image,
      title: img.title,
      date: `${monthData.monthName} ${yearData.year}`
    }));
    
    const imageIndex = lightboxImages.findIndex(img => img.id === clickedImage.id);
    setSelectedImages(lightboxImages);
    setSelectedImage(imageIndex);
    setIsLightboxOpen(true);
  };

  const getTotalImagesCount = () => {
    return galleryData.reduce((total, yearData) => {
      return total + yearData.months.reduce((yearTotal, monthData) => {
        return yearTotal + monthData.images.length;
      }, 0);
    }, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20 pb-12">
        {/* Header */}
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Event Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Relive the magic of F.O.T.U events through our photo collection. 
              From intimate backstage moments to explosive crowd reactions.
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 to-orange-500" />
              
              {galleryData.map((yearData) => (
                <div key={yearData.year} className="relative mb-8">
                  {/* Year marker */}
                  <div className="absolute left-6 w-4 h-4 bg-yellow-400 rounded-full border-4 border-white shadow-lg" />
                  
                  <Collapsible 
                    open={openYears.includes(yearData.year)} 
                    onOpenChange={() => toggleYear(yearData.year)}
                  >
                    <CollapsibleTrigger asChild>
                      <Button 
                        variant="ghost" 
                        className="ml-16 p-0 h-auto text-left hover:bg-transparent group"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-2">
                            {openYears.includes(yearData.year) ? (
                              <ChevronDown className="w-5 h-5 text-yellow-500" />
                            ) : (
                              <ChevronRight className="w-5 h-5 text-yellow-500" />
                            )}
                            <Calendar className="w-6 h-6 text-yellow-500" />
                          </div>
                          <h2 className="text-3xl font-bold text-gray-800 group-hover:text-yellow-500 transition-colors">
                            {yearData.year}
                          </h2>
                          <span className="text-gray-500 text-lg">
                            ({yearData.months.reduce((total, month) => total + month.images.length, 0)} photos)
                          </span>
                        </div>
                      </Button>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent className="ml-16 mt-6 animate-accordion-down">
                      {yearData.months
                        .sort((a, b) => b.month - a.month)
                        .map((monthData) => (
                          <div key={monthData.month} className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
                              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                              {monthData.monthName} {yearData.year}
                            </h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ml-5">
                              {monthData.images.map((image) => (
                                <Card 
                                  key={image.id} 
                                  className="bg-white border-gray-200 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group shadow-md hover:shadow-lg"
                                  onClick={() => openLightbox(yearData, monthData, image)}
                                >
                                  <CardContent className="p-0">
                                    <div className="relative overflow-hidden rounded-lg">
                                      <img 
                                        src={image.image} 
                                        alt={image.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <h4 className="text-white font-semibold mb-1">{image.title}</h4>
                                        <p className="text-yellow-400 text-sm">{monthData.monthName} {yearData.year}</p>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </div>
                        ))}
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-black text-yellow-500 mb-2">
                {getTotalImagesCount()}
              </div>
              <div className="text-gray-600 font-semibold">Total Photos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-yellow-500 mb-2">
                {galleryData.length}
              </div>
              <div className="text-gray-600 font-semibold">Years of Events</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-yellow-500 mb-2">
                10+
              </div>
              <div className="text-gray-600 font-semibold">Events Covered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-yellow-500 mb-2">
                ∞
              </div>
              <div className="text-gray-600 font-semibold">Memories Made</div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Gallery */}
      <LightboxGallery
        images={selectedImages}
        initialIndex={selectedImage}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />
    </div>
  );
};

export default Gallery;
