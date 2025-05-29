
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GalleryItem {
  id: string;
  image: string;
  title: string;
  date: string;
}

interface LightboxGalleryProps {
  images: GalleryItem[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

const LightboxGallery = ({ images, initialIndex, isOpen, onClose }: LightboxGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  if (!isOpen) return null;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
      {/* Close button */}
      <Button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
        size="sm"
      >
        <X className="w-5 h-5" />
      </Button>

      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <Button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
            size="sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
            size="sm"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </>
      )}

      {/* Main image */}
      <div className="flex flex-col items-center max-w-full max-h-full">
        <img 
          src={currentImage.image} 
          alt={currentImage.title}
          className="max-w-full max-h-[80vh] object-contain rounded-lg"
        />
        
        {/* Image info */}
        <div className="mt-4 text-center text-white">
          <h3 className="text-xl font-semibold mb-1">{currentImage.title}</h3>
          <p className="text-gray-300">{currentImage.date}</p>
          <p className="text-gray-400 text-sm mt-2">
            {currentIndex + 1} of {images.length}
          </p>
        </div>
      </div>

      {/* Thumbnail navigation */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 max-w-full overflow-x-auto px-4">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 w-16 h-16 rounded border-2 transition-all duration-300 ${
                index === currentIndex ? 'border-yellow-400' : 'border-gray-600 hover:border-gray-400'
              }`}
            >
              <img 
                src={image.image} 
                alt={image.title}
                className="w-full h-full object-cover rounded"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LightboxGallery;
