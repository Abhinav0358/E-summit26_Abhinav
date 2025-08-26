import { Component } from '@angular/core';

interface ContactLink { label: string; url: string; type: 'mail' | 'whatsapp' | 'linkedin' | string }
interface ContactCard {
  name: string;
  role: string;
  image: string; // can be remote or local asset
  links: ContactLink[];
}

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  title = 'Contact Us';

  // Replace image with local asset when available (e.g. assets/img/name.jpg)
  contacts: ContactCard[] = [
    {
      name: 'Chaitanya Patel',
      role: 'Creatives and Partnerships Head',
      image: 'https://th.bing.com/th/id/R.8e632b4dbd61ffe21316d0aa8fd99717?rik=S%2fVRgWs8B1QUSA&riu=http%3a%2f%2fwww.dumpaday.com%2fwp-content%2fuploads%2f2019%2f12%2fpictures-10-2.jpg&ehk=QH5i3EAxyZYJFl0N54KuqmERNBOpDvFxygcV4nlsxsk%3d&risl=&pid=ImgRaw&r=0',
      links: [
        { label: 'Email', url: 'mailto:someone@example.com', type: 'mail'},
        { label: 'LinkedIn', url: 'https://www.linkedin.com', type: 'linkedin' },
        { label: 'Whatsapp', url: 'https://wa.me/10000000000', type: 'whatsapp' }
      ]
    },
    {
      name: 'Chaitanya Patel',
      role: 'Creatives and Partnerships Head',
      image: 'https://th.bing.com/th/id/R.8e632b4dbd61ffe21316d0aa8fd99717?rik=S%2fVRgWs8B1QUSA&riu=http%3a%2f%2fwww.dumpaday.com%2fwp-content%2fuploads%2f2019%2f12%2fpictures-10-2.jpg&ehk=QH5i3EAxyZYJFl0N54KuqmERNBOpDvFxygcV4nlsxsk%3d&risl=&pid=ImgRaw&r=0',
      links: [
        { label: 'Email', url: 'mailto:someone@example.com', type: 'mail' },
        { label: 'LinkedIn', url: 'https://www.linkedin.com', type: 'linkedin' },
        { label: 'Whatsapp', url: 'https://wa.me/10000000000', type: 'whatsapp' }
      ]
    },
    {
      name: 'Chaitanya Patel',
      role: 'Creatives and Partnerships Head',
      image: 'https://th.bing.com/th/id/R.8e632b4dbd61ffe21316d0aa8fd99717?rik=S%2fVRgWs8B1QUSA&riu=http%3a%2f%2fwww.dumpaday.com%2fwp-content%2fuploads%2f2019%2f12%2fpictures-10-2.jpg&ehk=QH5i3EAxyZYJFl0N54KuqmERNBOpDvFxygcV4nlsxsk%3d&risl=&pid=ImgRaw&r=0',
      links: [
        { label: 'Email', url: 'mailto:someone@example.com', type: 'mail' },
        { label: 'LinkedIn', url: 'https://www.linkedin.com', type: 'linkedin' },
        { label: 'Whatsapp', url: 'https://wa.me/10000000000', type: 'whatsapp' }
      ]
    }
  ];
}
